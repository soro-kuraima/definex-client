'use client';

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { useState } from 'react';
import { DataTable } from './data-table';
import { columns } from './columns';

export type StockData = {
  T: string; // Ticker symbol
  v: number; // Volume
  vw: number; // Volume Weighted Average Price
  o: number; // Open price
  c: number; // Close price
  h: number; // High price
  l: number; // Low price
  t: number; // Timestamp
  n: number; // Number of transactions
};

export const PaginatedMarketData = ({ data }: { data: StockData[] }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const getCurrentPageData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  };
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const visiblePages = 5;
  return (
    <div className="market-data">
      <div className="h-[70vh] block">
        <DataTable columns={columns} data={getCurrentPageData()} />
      </div>

      <div className="pagination py-4">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => handlePageChange(currentPage - 1)}
                isActive={currentPage > 1}
              />
            </PaginationItem>

            {[...Array(totalPages)].map((_, index) => (
              <PaginationItem key={index}>
                <PaginationLink
                  href="#"
                  onClick={() => handlePageChange(index + 1)}
                  isActive={currentPage === index + 1}
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}

            <PaginationItem>
              <PaginationNext
                onClick={() => handlePageChange(currentPage + 1)}
                isActive={currentPage < totalPages}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};
