'use client';
import { useState, useEffect, useCallback } from 'react';
import {
  useReadAlysNftp2PMarketGetLoanRequest,
  useReadAlysNftp2PMarketLoanRequests,
  useWriteAlysNftp2PMarketMakeLoanOffer,
} from '@/wagmi.generated';
import { Button } from '@/components/ui/button';
import toast from 'react-hot-toast';

interface LoanRequest {
  id: number;
  tokenIds: bigint[];
  borrower: string;
  principal: bigint;
  interestRate: bigint;
  duration: bigint;
  totalValue: bigint;
  isActive: boolean;
}

export function LoanRequests() {
  const [loanRequests, setLoanRequests] = useState<LoanRequest[]>([]);
  const [currentId, setCurrentId] = useState(0);

  const {
    data: currentLoanRequest,
    isError,
    isLoading,
  } = useReadAlysNftp2PMarketLoanRequests({
    args: [BigInt(currentId)],
  });

  const { data: loanRequestDetails } = useReadAlysNftp2PMarketGetLoanRequest({
    args: [BigInt(currentId)],
  });

  const fetchNextLoanRequest = useCallback(() => {
    if (!isLoading && !isError) {
      if (currentLoanRequest && currentLoanRequest[5]) {
        if (loanRequestDetails) {
          setLoanRequests((prev) => [
            ...prev,
            { id: currentId, ...loanRequestDetails },
          ]);
        }
        setCurrentId((prev) => prev + 1);
      }
    }
  }, [currentLoanRequest, loanRequestDetails, isLoading, isError, currentId]);

  const {
    writeContractAsync: makeLoanOffer,
    isError: loanOfferError,
    isPending: loanOfferPending,
    isSuccess: loanOfferSuccess,
  } = useWriteAlysNftp2PMarketMakeLoanOffer();

  useEffect(() => {
    fetchNextLoanRequest();
  }, [fetchNextLoanRequest]);

  return (
    <div>
      <h2>Loan Requests</h2>
      {loanRequests.map((request) => (
        <div key={request.id}>
          <p>Request ID: {request.id}</p>
          <p>Borrower: {request.borrower}</p>
          <p>Principal: {request.principal.toString()}</p>
          <p>Total Value: {request.totalValue.toString()}</p>
          <p>Is Active: {request.isActive.toString()}</p>
          <Button
            disabled={loanOfferPending}
            onClick={async () => {
              await makeLoanOffer({
                args: [
                  BigInt(request.id),
                  BigInt(request.principal),
                  BigInt(350),
                  BigInt(48),
                ],
                value: BigInt(request.principal),
              });
              if (loanOfferError) {
                console.log(loanOfferError);
                toast.error('Failed to make loan offer');
              } else if (loanOfferSuccess) {
                toast.success('Loan offer made successfully');
              }
            }}
          >
            Offer loan
          </Button>
        </div>
      ))}
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error fetching loan requests</p>}
    </div>
  );
}
