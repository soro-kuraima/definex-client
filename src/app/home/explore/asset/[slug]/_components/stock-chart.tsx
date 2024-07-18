'use client';

import * as React from 'react';
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from 'recharts';
import { ChevronDown } from 'lucide-react';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

interface StockData {
  c: number;
  h: number;
  l: number;
  n: number;
  o: number;
  t: number;
  v: number;
  vw: number;
}

interface StockChartProps {
  data: StockData[];
  onTimeRangeChange: (timeRange: number) => void;
  selectedTimeRange: string;
  setSelectedTimeRange: (timeRange: string) => void;
}

const chartConfig = {
  stock: {
    label: 'Stock Price',
  },
  open: {
    label: 'Open Price',
    color: 'hsl(var(--chart-1))',
  },
  close: {
    label: 'Close Price',
    color: 'hsl(var(--chart-2))',
  },
  vw: {
    label: 'VWAP',
    color: 'hsl(var(--chart-3))',
  },
} satisfies ChartConfig;

const dayInMs = 1000 * 60 * 60 * 24;

export function StockChart({
  data,
  onTimeRangeChange,
  selectedTimeRange,
  setSelectedTimeRange,
}: StockChartProps) {
  const handleTimeRangeChange = (timeRange: string) => {
    console.log(timeRange);
    switch (timeRange) {
      case '1D':
        onTimeRangeChange(Date.now() - 3 * dayInMs);
        console.log('1D');
        break;
      case '1W':
        onTimeRangeChange(Date.now() - 10 * dayInMs);
        console.log('1W');
        break;
      case '1M':
        onTimeRangeChange(Date.now() - 33 * dayInMs);
        console.log('1M');
        break;
      case '3M':
        onTimeRangeChange(Date.now() - 93 * dayInMs);
        console.log('3M');
        break;
      case '1Y':
        onTimeRangeChange(Date.now() - 366 * dayInMs);
        console.log('1Y');
        break;
    }
    setSelectedTimeRange(timeRange);
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="space-y-1">
          <CardTitle>Stock Price Chart</CardTitle>
          <CardDescription>
            Showing open price, close price, and VWAP
          </CardDescription>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              {selectedTimeRange} <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {['1D', '1W', '1M', '3M', '1Y'].map((range) => (
              <DropdownMenuItem
                key={range}
                onClick={() => handleTimeRangeChange(range)}
              >
                {range}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[350px] w-full"
        >
          <AreaChart data={data}>
            <defs>
              <linearGradient id="fillOpen" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="hsl(var(--primary))"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="hsl(var(--primary))"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillClose" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="hsl(var(--secondary))"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="hsl(var(--secondary))"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillVW" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="hsl(var(--accent))"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="hsl(var(--accent))"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="t"
              tickFormatter={(value) => {
                return new Date(value).toLocaleDateString();
              }}
              minTickGap={50000}
            />
            <YAxis />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  labelFormatter={(value, payload) => {
                    if (payload && payload.length > 0 && payload[0].payload) {
                      const timestamp = payload[0].payload.t;
                      return new Date(timestamp).toLocaleDateString();
                    }
                    return 'No date';
                  }}
                />
              }
            />
            <Area
              type="monotone"
              dataKey="o"
              name="Open Price"
              stroke="hsl(var(--primary))"
              fillOpacity={1}
              fill="url(#fillOpen)"
            />
            <Area
              type="monotone"
              dataKey="c"
              name="Close Price"
              stroke="hsl(var(--secondary))"
              fillOpacity={1}
              fill="url(#fillClose)"
            />
            <Area
              type="monotone"
              dataKey="vw"
              name="VWAP"
              stroke="hsl(var(--accent))"
              fillOpacity={1}
              fill="url(#fillVW)"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

function ChartLegendContent({ payload }: { payload?: any }) {
  return (
    <ul className="flex justify-center space-x-4 text-sm">
      {payload.map((entry: any, index: number) => (
        <li key={`item-${index}`} className="flex items-center">
          <span
            className="inline-block w-3 h-3 mr-1 rounded-full"
            style={{ backgroundColor: entry.color }}
          />
          {entry.value}
        </li>
      ))}
    </ul>
  );
}
