import { polygonRest } from '@/config/polygon';
import { marketAssets } from '@/utils/market-assets';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  const dayInMs = 1000 * 60 * 60 * 24;
  const date = new Date(Date.now() - 2 * dayInMs)
    .toISOString()
    .substring(0, 10);
  const response = await polygonRest.stocks.aggregatesGroupedDaily(date);

  const marketData = response.results.filter((result) =>
    marketAssets.stocks.includes(result.T ?? 'nostock')
  );

  return Response.json(marketData);
}
