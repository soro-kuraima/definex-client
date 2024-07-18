import axios from 'axios';

const MAX_RETRIES = 20;
const RETRY_DELAY = 500; // 500ms

async function checkProcessStatus(processId: string): Promise<any> {
  const processStatusConfig = {
    method: 'get',
    url: `https://api.monsterapi.ai/v1/status/${processId}`,
    headers: {
      accept: 'application/json',
      authorization: `Bearer ${process.env.MONSTER_API_KEY}`,
    },
  };

  let retries = 0;

  while (retries < MAX_RETRIES) {
    try {
      const processStatusRes = await axios(processStatusConfig);

      if (processStatusRes.status === 200) {
        const status = processStatusRes.data.status;

        if (status === 'COMPLETED') {
          return { success: true, data: processStatusRes.data };
        } else if (status === 'FAILED') {
          return { success: false, error: 'Image generation failed' };
        }

        // If status is IN_QUEUE or IN_PROGRESS, wait and retry
        await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY));
        retries++;
      } else {
        throw new Error(
          `Unexpected response status: ${processStatusRes.status}`
        );
      }
    } catch (error) {
      console.error('Error checking process status:', error);
      throw error;
    }
  }

  return {
    success: false,
    error: 'Max retries reached. Process did not complete in time.',
  };
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const name = searchParams.get('name');

  const data = {
    enhance: true,
    optimize: false,
    safe_filter: true,
    negprompt: 'text',
    prompt: `A futuristic trading card representing ${name}, 3:4 aspect ratio, rounded corners, vibrant gradient background, holographic sheen, subtle depth with drop shadow, no text`,
    aspect_ratio: 'portrait',
    style: 'digital-art',
  };

  const text2ImageConfig = {
    method: 'post',
    url: 'https://api.monsterapi.ai/v1/generate/sdxl-base',
    headers: {
      accept: 'application/json',
      authorization: `Bearer ${process.env.MONSTER_API_KEY}`,
      'content-type': 'application/json',
    },
    data: data,
  };

  try {
    // Initial request to get process ID
    const text2ImageRes = await axios(text2ImageConfig);
    console.log(text2ImageRes.data.process_id, 'text2imageres');

    if (text2ImageRes.status !== 200) {
      console.error('Error making request:', text2ImageRes.data.message);
      return Response.json(
        { error: 'Failed to generate Image' },
        { status: 500 }
      );
    }

    const processId = text2ImageRes.data.process_id;

    // Check process status with retries
    const finalStatus = await checkProcessStatus(processId);

    if (finalStatus.success) {
      // Process completed successfully
      const imageUrl = finalStatus.data.result.output[0];
      console.log(imageUrl);
      return Response.json({ imageUrl: imageUrl });
    } else {
      // Process failed or timed out
      return Response.json(
        { success: false, error: finalStatus.error },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error in image generation process:', error);
    return Response.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}
