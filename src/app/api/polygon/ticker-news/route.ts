import { polygonRest } from '@/config/polygon';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const ticker = searchParams.get('ticker');

  const dayInMs = 1000 * 60 * 60 * 24;
  const date = new Date(Date.now() - 2 * dayInMs)
    .toISOString()
    .substring(0, 10);

  const response = await polygonRest.reference.tickerNews({
    ticker: ticker!,
    limit: 20,
  });

  return Response.json(response.results);
}
