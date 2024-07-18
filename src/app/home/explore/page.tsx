import {
  PaginatedMarketData,
  StockData,
} from './_components/paginated-market-data';

async function getMarketData() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/polygon/market-aggregates-daily`
  );
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default async function ExplorePage() {
  const dayInMs = 1000 * 60 * 60 * 24;
  const date = new Date(Date.now() - dayInMs).toISOString().substring(0, 10);

  const data = await getMarketData();

  const marketData = data.map((stock: StockData) => {
    return {
      T: stock.T,
      v: stock.v,
      vw: stock.vw,
      o: stock.o,
      c: stock.c,
      h: stock.h,
      l: stock.l,
      n: stock.n,
    };
  });

  return (
    <div>
      <div>
        <PaginatedMarketData data={marketData} />
      </div>
    </div>
  );
}
