import { polygonRest } from '@/config/polygon';

export async function GET() {
  const dayInMs = 1000 * 60 * 60 * 24;
  const date = new Date(Date.now() - dayInMs).toISOString().substring(0, 10);

  const response = await polygonRest.crypto.dailyOpenClose('BTC', 'USD', date);

  return Response.json({
    o: response.open,
    c: response.close,
  });
}
