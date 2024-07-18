'use client';
import { useState, useEffect, useCallback } from 'react';
import {
  useReadAlysNftp2PMarketGetActiveOffer,
  useReadAlysNftp2PMarketOffers,
  useWriteAlysNftp2PMarketAcceptOffer,
} from '@/wagmi.generated';
import { Button } from '@/components/ui/button';
import toast from 'react-hot-toast';
import { useAccount } from 'wagmi';

interface BuyerOffer {
  tokenId: bigint;
  buyer: string;
  amount: bigint;
  expirationTime: bigint;
}

export function BuyerOffers() {
  const [buyerOffers, setBuyerOffers] = useState<BuyerOffer[]>([]);
  const [currentTokenId, setCurrentTokenId] = useState(0);
  const { address: currentUserAddress } = useAccount();

  const {
    data: currentOffer,
    isError,
    isLoading,
  } = useReadAlysNftp2PMarketOffers({
    args: [BigInt(currentTokenId)],
  });

  const { data: offerDetails } = useReadAlysNftp2PMarketGetActiveOffer({
    args: [BigInt(currentTokenId)],
  });

  const {
    writeContractAsync: acceptOffer,
    isError: acceptOfferError,
    isPending: acceptOfferPending,
    isSuccess: acceptOfferSuccess,
  } = useWriteAlysNftp2PMarketAcceptOffer();

  const fetchNextOffer = useCallback(() => {
    if (!isLoading && !isError) {
      if (
        currentOffer &&
        currentOffer[0] !== '0x0000000000000000000000000000000000000000'
      ) {
        if (offerDetails && offerDetails.buyer !== currentUserAddress) {
          setBuyerOffers((prev) => [
            ...prev,
            { tokenId: BigInt(currentTokenId), ...offerDetails },
          ]);
        }
        setCurrentTokenId((prev) => prev + 1);
      }
    }
  }, [
    currentOffer,
    offerDetails,
    isLoading,
    isError,
    currentTokenId,
    currentUserAddress,
  ]);

  useEffect(() => {
    fetchNextOffer();
  }, [fetchNextOffer]);

  const handleAcceptOffer = async (tokenId: bigint) => {
    try {
      await acceptOffer({
        args: [tokenId],
      });
      if (acceptOfferSuccess) {
        toast.success('Offer accepted successfully');
      }
    } catch (error) {
      console.error('Error accepting offer:', error);
      toast.error('Failed to accept offer');
    }
  };

  return (
    <div>
      <h2>Buyer Offers</h2>
      {buyerOffers.map((offer) => (
        <div key={offer.tokenId.toString()}>
          <p>Token ID: {offer.tokenId.toString()}</p>
          <p>Buyer: {offer.buyer}</p>
          <p>Amount: {offer.amount.toString()}</p>
          <p>
            Expiration Time:{' '}
            {new Date(Number(offer.expirationTime) * 1000).toLocaleString()}
          </p>
          <Button
            onClick={() => handleAcceptOffer(offer.tokenId)}
            disabled={acceptOfferPending}
          >
            Accept Offer
          </Button>
        </div>
      ))}
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error fetching buyer offers</p>}
    </div>
  );
}
