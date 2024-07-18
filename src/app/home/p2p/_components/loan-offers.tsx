'use client';
import { useState, useEffect, useCallback } from 'react';
import {
  useReadAlysNftp2PMarketGetLoanOffer,
  useReadAlysNftp2PMarketLoanOffers,
  useWriteAlysNftp2PMarketAcceptLoanOffer,
} from '@/wagmi.generated';
import { useAccount } from 'wagmi';
import { Button } from '@/components/ui/button';
import toast from 'react-hot-toast';

interface LoanOffer {
  id: number;
  lender: string;
  principal: bigint;
  interestRate: bigint;
  duration: bigint;
  expirationTime: bigint;
}

export function LoanOffers() {
  const [loanOffers, setLoanOffers] = useState<LoanOffer[]>([]);
  const [currentId, setCurrentId] = useState(0);
  const { address } = useAccount();

  const {
    data: currentLoanOffer,
    isError,
    isLoading,
  } = useReadAlysNftp2PMarketLoanOffers({
    args: [BigInt(currentId)],
  });

  const { data: loanOfferDetails } = useReadAlysNftp2PMarketGetLoanOffer({
    args: [BigInt(currentId)],
  });

  const {
    writeContractAsync: acceptLoanOffer,
    isError: acceptOfferError,
    isPending: acceptOfferPending,
    isSuccess: acceptOfferSuccess,
  } = useWriteAlysNftp2PMarketAcceptLoanOffer();

  const fetchNextLoanOffer = useCallback(() => {
    if (!isLoading && !isError) {
      if (
        currentLoanOffer &&
        currentLoanOffer[0] !== '0x0000000000000000000000000000000000000000'
      ) {
        if (loanOfferDetails && loanOfferDetails.lender !== address) {
          setLoanOffers((prev) => [
            ...prev,
            { id: currentId, ...loanOfferDetails },
          ]);
        }
        setCurrentId((prev) => prev + 1);
      }
    }
  }, [
    currentLoanOffer,
    loanOfferDetails,
    isLoading,
    isError,
    currentId,
    address,
  ]);

  useEffect(() => {
    fetchNextLoanOffer();
  }, [fetchNextLoanOffer]);

  const handleAcceptOffer = async (offerId: number) => {
    try {
      await acceptLoanOffer({
        args: [BigInt(offerId)],
      });
      toast.success('Loan offer accepted successfully');
    } catch (error) {
      console.error('Error accepting loan offer:', error);
      toast.error('Failed to accept loan offer');
    }
  };

  if (!address) {
    return <p>Please connect your wallet to view loan offers.</p>;
  }

  return (
    <div>
      <h2>Loan Offers</h2>
      {loanOffers.map((offer) => (
        <div key={offer.id}>
          <p>Offer ID: {offer.id}</p>
          <p>Lender: {offer.lender}</p>
          <p>Principal: {offer.principal.toString()}</p>
          <p>Interest Rate: {offer.interestRate.toString()}</p>
          <p>Duration: {offer.duration.toString()}</p>
          <p>
            Expiration Time:{' '}
            {new Date(Number(offer.expirationTime) * 1000).toLocaleString()}
          </p>
          <Button
            disabled={acceptOfferPending}
            onClick={() => handleAcceptOffer(offer.id)}
          >
            Accept Offer
          </Button>
        </div>
      ))}
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error fetching loan offers</p>}
      {loanOffers.length === 0 && !isLoading && !isError && (
        <p>No loan offers available.</p>
      )}
    </div>
  );
}
