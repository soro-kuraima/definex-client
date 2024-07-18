import { NextRequest, NextResponse } from 'next/server';
import sharp from 'sharp';
import axios from 'axios';
import path from 'path';
import fs from 'fs';

export async function POST(req: NextRequest) {
  console.log('API call started');
  try {
    const { url1, url2, ticker, units } = await req.json();
    console.log('Received parameters:', { url1, url2, ticker, units });

    if (!url1 || !url2 || !ticker || !units) {
      console.log('Missing required parameters');
      return NextResponse.json(
        { error: 'Missing required parameters' },
        { status: 400 }
      );
    }

    const url2WithApiKey = `${url2}?apiKey=${process.env.POLY_API_KEY}`;
    console.log('URL2 with API key:', url2WithApiKey);

    // Download images
    console.log('Downloading images...');
    const [image1Buffer, image2Buffer] = await Promise.all([
      axios
        .get(url1, { responseType: 'arraybuffer' })
        .then((response) => response.data),
      axios
        .get(url2WithApiKey, { responseType: 'arraybuffer' })
        .then((response) => response.data),
    ]);
    console.log('Images downloaded successfully');

    // Process images
    console.log('Processing images...');
    const mainImage = sharp(image1Buffer);
    const { width, height } = await mainImage.metadata();
    console.log('Main image dimensions:', { width, height });

    const logoSize = Math.ceil(Math.min(width!, height!) / 5);
    console.log('Logo size:', logoSize);

    const logo = await sharp(image2Buffer)
      .resize(logoSize, logoSize)
      .toBuffer();
    console.log('Logo resized');

    console.log('Compositing images...');
    const resultImage = await mainImage
      .composite([
        {
          input: logo,
          gravity: 'southeast',
        },
        {
          input: {
            text: {
              text: `Ticker: ${ticker}, units: ${units}`,
              font: 'Courier New',
              width: 360,
              height: 100,
              rgba: true,
            },
          },
          gravity: 'northwest',
          top: 10,
          left: 10,
        },
      ])
      .png()
      .toBuffer();
    console.log('Image composition complete');

    // Save the result
    const fileName = `merged_${Date.now()}.png`;
    const filePath = path.join(
      process.cwd(),
      'public',
      'merged-images',
      fileName
    );
    console.log('Saving file to:', filePath);

    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, resultImage);
    console.log('File saved successfully');

    console.log('API call completed successfully');
    return new Response(resultImage, {
      status: 200,
      headers: {
        'Content-Type': 'image/png',
        'Content-Disposition': `inline; filename="${fileName}"`,
      },
    });
  } catch (error) {
    console.error('Error processing images:', error);
    if (error instanceof Error) {
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
    }
    return NextResponse.json(
      { error: 'Failed to process images' },
      { status: 500 }
    );
  }
}
