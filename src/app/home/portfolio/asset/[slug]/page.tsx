import { Button } from '@/components/ui/button';
import { AssetHeader } from './_components/asset-header';
import { AssetGraph } from './_components/asset-graph';
import { AssetDetails } from './_components/asset-details';
import { AssetNews } from './_components/asset-news';

/* eslint-disable prettier/prettier */
async function getTickerDailyData(ticker: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/polygon/ticker-daily?ticker=${ticker}`
  );
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

async function getTickerDetails(ticker: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/polygon/ticker-details?ticker=${ticker}`
  );
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

async function getTickerNews(ticker: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/polygon/ticker-news?ticker=${ticker}`
  );
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

async function getBitcoinPrice() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/polygon/bitcoin-price`
  );
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default async function AssetPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const tickerDailyData = await getTickerDailyData(slug);
  const tickerDetails = await getTickerDetails(slug);
  const tickerNews = await getTickerNews(slug);

  const bitcoinPrice = await getBitcoinPrice();

  const bitcoinPriceAveraged = (bitcoinPrice.o + bitcoinPrice.c) / 2;

  return (
    <div className="asset">
      <div className="asset-header">
        <AssetHeader
          name={tickerDetails.name}
          ticker={tickerDetails.ticker}
          homePageUrl={tickerDetails.homepage_url}
          logoUrl={tickerDetails.branding.icon_url}
          preMarket={tickerDailyData.preMarket}
          close={tickerDailyData.close}
          afterHours={tickerDailyData.afterHours}
          date={tickerDailyData.from}
          description={tickerDetails.description}
          openPrice={tickerDailyData.open}
          closePrice={tickerDailyData.close}
          highPrice={tickerDailyData.high}
          lowPrice={tickerDailyData.low}
          alysToUSD={bitcoinPriceAveraged}
        />
      </div>
      <div className="asset-graph">
        <AssetGraph ticker={slug} />
      </div>
      <div className="asset-details">
        <AssetDetails
          previousOpen={tickerDailyData.open}
          previousClose={tickerDailyData.close}
          previousHigh={tickerDailyData.high}
          previousLow={tickerDailyData.low}
          volume={tickerDailyData.volume}
          marketCap={tickerDetails.market_cap}
          totalEmployees={tickerDetails.total_employees}
          sicDescription={tickerDetails.sic_description}
          cik={tickerDetails.cik}
          compositeFigi={tickerDetails.composite_figi}
          description={tickerDetails.description}
        />
      </div>
      <div className="asset-news">
        <AssetNews newsData={tickerNews} />
      </div>
    </div>
  );
}
