'use client';
import { useState, useEffect, useCallback } from 'react';
import {
  useReadAlysNftp2PMarketGetActiveLoan,
  useWriteAlysNftp2PMarketRepayLoan,
} from '@/wagmi.generated';
import { useAccount } from 'wagmi';
import { Button } from '@/components/ui/button';
import toast from 'react-hot-toast';

interface ActiveLoan {
  id: number;
  borrower: string;
  lender: string;
  tokenIds: bigint[];
  principal: bigint;
  interestRate: bigint;
  duration: bigint;
  startTime: bigint;
}

export function ActiveLoans() {
  const [activeLoans, setActiveLoans] = useState<ActiveLoan[]>([]);
  const [currentId, setCurrentId] = useState(0);
  const { address } = useAccount();

  const {
    data: loanData,
    isError,
    isLoading,
  } = useReadAlysNftp2PMarketGetActiveLoan({
    args: [BigInt(currentId)],
  });

  const { writeContractAsync: repayLoan, isPending: repayPending } =
    useWriteAlysNftp2PMarketRepayLoan();

  const fetchNextLoan = useCallback(() => {
    if (!isLoading && !isError && loanData) {
      if (!loanData.isRepaid && loanData.borrower === address) {
        setActiveLoans((prev) => [...prev, { id: currentId, ...loanData }]);
      }
      setCurrentId((prev) => prev + 1);
    }
  }, [loanData, isLoading, isError, currentId, address]);

  useEffect(() => {
    fetchNextLoan();
  }, [fetchNextLoan]);

  const handleRepayLoan = async (loanId: number, amount: bigint) => {
    try {
      await repayLoan({
        args: [BigInt(loanId)],
        value: amount,
      });
      toast.success('Loan repaid successfully');
    } catch (error) {
      console.error('Error repaying loan:', error);
      toast.error('Failed to repay loan');
    }
  };

  if (!address) {
    return <p>Please connect your wallet to view your active loans.</p>;
  }

  return (
    <div>
      <h2>Your Active Loans</h2>
      {activeLoans.map((loan) => (
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
          <Button
            disabled={repayPending}
            onClick={() => handleRepayLoan(loan.id, loan.principal)}
          >
            Repay Loan
          </Button>
        </div>
      ))}
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error fetching active loans</p>}
      {activeLoans.length === 0 && !isLoading && !isError && (
        <p>You have no active loans.</p>
      )}
    </div>
  );
}
