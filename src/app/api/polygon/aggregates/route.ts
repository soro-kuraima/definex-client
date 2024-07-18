import { polygonRest } from '@/config/polygon';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const ticker = searchParams.get('ticker');
  const from = searchParams.get('from');

  const multiplier = 1;

  const dayInMs = 1000 * 60 * 60 * 24;
  const to = (Date.now() - 2 * dayInMs).toString();

  const timespan = 'minute';

  const response = await polygonRest.stocks.aggregates(
    ticker!,
    multiplier,
    timespan!,
    from!,
    to,
    {
      limit: 50000,
    }
  );

  return Response.json(response);
}
