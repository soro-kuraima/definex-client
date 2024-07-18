'use client';

import { ColumnDef } from '@tanstack/react-table';

export type Stock = {
  T: string; // Ticker symbol
  v: number; // Volume
  vw: number; // Volume Weighted Average Price
  o: number; // Open price
  c: number; // Close price
  h: number; // High price
  l: number; // Low price
  n: number; // Number of transactions
};

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<Stock>[] = [
  {
    accessorKey: 'T',
    header: 'Ticker',
  },
  {
    accessorKey: 'v',
    header: 'Volume',
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('v'));
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount);

      return <div className="font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: 'vw',
    header: 'Volume Weighted Average Price',
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('vw'));
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount);

      return <div className="font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: 'o',
    header: 'Open Price',
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('vw'));
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount);

      return <div className="font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: 'c',
    header: 'Close Price',
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('c'));
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount);

      return <div className="font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: 'h',
    header: 'High Price',
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('h'));
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount);

      return <div className="font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: 'l',
    header: 'Low Price',
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('l'));
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount);

      return <div className="font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: 'n',
    header: 'Number of Transactions',
  },
];
