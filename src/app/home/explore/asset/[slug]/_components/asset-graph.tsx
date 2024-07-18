'use client';

import { Button } from '@/components/ui/button';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { StockChart } from './stock-chart';
import { LoadingWave } from '@/components/loading-wave';

const dayInMs = 1000 * 60 * 60 * 24;
const date = (Date.now() - 10 * dayInMs).toString();

async function getAggregates(ticker: string, from: number) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/polygon/aggregates?ticker=${ticker}&from=${from}`
  );
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export function AssetGraph({ ticker }: { ticker: string }) {
  const [from, setFrom] = useState(Number(date));
  const [selectedTimeRange, setSelectedTimeRange] = useState('1D');

  const dataTransformers = (rawData: any) => {
    if (rawData.resultsCount > 0) {
      return rawData.results;
    }

    return [];
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ['aggregates', ticker, from],
    queryFn: () => getAggregates(ticker, from),
    select: dataTransformers,
  });

  if (isLoading) {
    return (
      <div className="h-[480px] flex justify-center items-center">
        <LoadingWave />
      </div>
    );
  }

  if (isError) {
    return <div className="h-[480px]">Error</div>;
  }

  return (
    <div className="asset-graph">
      <StockChart
        data={data}
        onTimeRangeChange={setFrom}
        selectedTimeRange={selectedTimeRange}
        setSelectedTimeRange={setSelectedTimeRange}
      />
    </div>
  );
}
