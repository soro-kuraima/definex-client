'use client';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import {
  useReadAlysNftTokenUri,
  useReadAlysNftGetTokenTicker,
  useReadAlysNftGetTokenUnits,
  useWriteAlysNftApprove,
  alysNftp2PMarketAddress,
  useReadAlysNftp2PMarketGetActiveListing,
  useWriteAlysNftp2PMarketListNft,
  useWriteAlysNftp2PMarketUnlistNft,
  useWriteAlysNftp2PMarketMakeOffer,
} from '@/wagmi.generated';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { list } from 'postcss';
import toast from 'react-hot-toast';

async function getTickerDailyData(ticker: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/polygon/ticker-daily?ticker=${ticker}`
  );
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export function Assets({ tokenId }: { tokenId: bigint }) {
  const {
    data: tokenUri,
    isError: tokenUriError,
    isLoading: tokenUriLoading,
  } = useReadAlysNftTokenUri({
    args: [tokenId],
  });

  const {
    data: tokenTicker,
    isError: tokenTickerError,
    isLoading: tokenTickerLoading,
  } = useReadAlysNftGetTokenTicker({
    args: [tokenId],
  });

  const {
    data: tokenUnits,
    isError: tokenUnitsError,
    isLoading: tokenUnitsLoading,
  } = useReadAlysNftGetTokenUnits({
    args: [tokenId],
  });

  const {
    data: activeListing,
    isError: listingError,
    isLoading: listingLoading,
  } = useReadAlysNftp2PMarketGetActiveListing({
    args: [tokenId],
  });

  const {
    writeContractAsync: makeBuyOffer,
    isError: buyOfferError,
    isPending: buyOfferPending,
    isSuccess: buyOfferSuccess,
  } = useWriteAlysNftp2PMarketMakeOffer();

  const { data, isError, isLoading } = useQuery({
    queryKey: ['ticker-price-nft-details', tokenTicker],
    queryFn: () => getTickerDailyData(tokenTicker!),
  });

  console.log(data);

  const stockPrice = (data?.open + data?.close + data?.low + data?.high) / 4;

  const value = (stockPrice * Number(tokenUnits)).toFixed(2);

  console.log(stockPrice);
  console.log(tokenUnits);

  if (tokenUriLoading || tokenTickerLoading || tokenUnitsLoading || isLoading) {
    return (
      <div className="flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
    );
  }

  if (isError || tokenUriError || tokenTickerError || tokenUnitsError) {
    return <p className="text-destructive">error fetching nft</p>;
  }

  const nftImageUrl = `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/${tokenUri}`;
  console.log(nftImageUrl);

  return (
    <li className="border-2">
      <Link
        href={{
          pathname: `/home/portfolio/asset/${tokenTicker}`,
          query: {
            tokenUnits: tokenUnits?.toString(),
            tokenId: tokenId.toString(),
            value: value,
          },
        }}
      >
        <img src={nftImageUrl} className="object-contain w-auto h-[360px]" />
      </Link>
      <span className="flex flex-col gap-1">
        <span className="py-2 px-1 text-center">{`Current value: $ ${value} /-`}</span>
        <Button
          disabled={buyOfferPending}
          onClick={async () => {
            await makeBuyOffer({
              args: [tokenId],
              value: BigInt(Math.ceil(Number.parseInt(value))),
            });
            if (buyOfferError) {
              toast.error('Failed to make buy offer');
            } else if (buyOfferSuccess) {
              toast.success('Buy offer made successfully');
            }
          }}
          variant={'secondary'}
        >
          Make Buy offer
        </Button>
      </span>
    </li>
  );
}
