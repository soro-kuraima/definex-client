'use client';
import { useState, useEffect, useCallback } from 'react';
import { useReadAlysNftp2PMarketGetActiveLoan } from '@/wagmi.generated';
import { useAccount } from 'wagmi';

interface RepaidLoan {
  id: number;
  borrower: string;
  lender: string;
  tokenIds: bigint[];
  principal: bigint;
  interestRate: bigint;
  duration: bigint;
  startTime: bigint;
}

export function RepaidLoans() {
  const [repaidLoans, setRepaidLoans] = useState<RepaidLoan[]>([]);
  const [currentId, setCurrentId] = useState(0);
  const { address } = useAccount();

  const {
    data: loanData,
    isError,
    isLoading,
  } = useReadAlysNftp2PMarketGetActiveLoan({
    args: [BigInt(currentId)],
  });

  const fetchNextLoan = useCallback(() => {
    if (!isLoading && !isError && loanData) {
      if (loanData.isRepaid && loanData.borrower === address) {
        setRepaidLoans((prev) => [...prev, { id: currentId, ...loanData }]);
      }
      setCurrentId((prev) => prev + 1);
    }
  }, [loanData, isLoading, isError, currentId, address]);

  useEffect(() => {
    fetchNextLoan();
  }, [fetchNextLoan]);

  if (!address) {
    return <p>Please connect your wallet to view your repaid loans.</p>;
  }

  return (
    <div>
      <h2>Your Repaid Loans</h2>
      {repaidLoans.map((loan) => (
        <div key={loan.id}>
          <p>Loan ID: {loan.id}</p>
          <p>Lender: {loan.lender}</p>
          <p>Principal: {loan.principal.toString()}</p>
          <p>Interest Rate: {loan.interestRate.toString()}</p>
          <p>Duration: {loan.duration.toString()}</p>
          <p>
            Start Time:{' '}
            {new Date(Number(loan.startTime) * 1000).toLocaleString()}
          </p>
        </div>
      ))}
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error fetching repaid loans</p>}
      {repaidLoans.length === 0 && !isLoading && !isError && (
        <p>You have no repaid loans.</p>
      )}
    </div>
  );
}
