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
  useWriteAlysNftp2PMarketCreateLoanRequest,
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

export function NFTDetails({ tokenId }: { tokenId: bigint }) {
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

  const listingStatus = !listingError && !listingLoading && activeListing;

  const {
    writeContractAsync: approveMarketPlace,
    isError: approvalError,
    error: approvalErrorMessage,
    isPending: approvalPending,
    isSuccess: approvalSuccess,
  } = useWriteAlysNftApprove();

  const {
    writeContractAsync: listNFT,
    isError: listingNftError,
    isPending: listingPending,
    isSuccess: listingSuccess,
  } = useWriteAlysNftp2PMarketListNft();

  const {
    writeContractAsync: unlistNFT,
    isError: unlistingNftError,
    isPending: unlistingPending,
    isSuccess: unlistingSuccess,
  } = useWriteAlysNftp2PMarketUnlistNft();

  const {
    writeContractAsync: createLoanRequest,
    isError: loanRequestError,
    isPending: loanRequestPending,
    isSuccess: loanRequestSuccess,
  } = useWriteAlysNftp2PMarketCreateLoanRequest();

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
      <span className="flex flex-col gap-2">
        <span className="py-2 px-1 text-center">{`Current value: $ ${value} /-`}</span>
        <Button
          variant={'outline'}
          disabled={listingPending || unlistingPending || approvalPending}
          onClick={async () => {
            await approveMarketPlace({
              args: [alysNftp2PMarketAddress[212121], tokenId],
            });
            if (!approvalError) {
              if (listingStatus) {
                unlistNFT({ args: [tokenId] });
                if (listingSuccess) {
                  toast.success('NFT unlisted successfully');
                }
                if (listingNftError) {
                  toast.error('Failed to unlist NFT');
                }
              } else {
                listNFT({
                  args: [tokenId, BigInt(Math.ceil(Number.parseInt(value)))],
                });
                if (listingSuccess) {
                  toast.success('NFT listed successfully');
                }
                if (listingNftError) {
                  toast.error('Failed to list NFT');
                }
              }
            } else {
              console.log('approvalError', approvalErrorMessage);
              toast.error('Failed to approve marketplace');
            }
          }}
        >
          {`${listingStatus ? 'Unlist' : 'List'} in Market`}
        </Button>
        {listingStatus && (
          <Button
            disabled={loanRequestPending}
            onClick={async () => {
              const totalValue = BigInt(
                Math.floor(stockPrice * Number(tokenUnits))
              );
              const principal = BigInt(
                Math.floor(stockPrice * Number(tokenUnits) * 0.8)
              );
              await createLoanRequest({
                args: [[tokenId], principal, totalValue],
              });

              if (loanRequestError) {
                toast.error('Error creating loan request');
              }
              if (loanRequestSuccess) {
                toast.success(
                  `Loan request created for $ ${principal} against asset with id ${tokenId}`
                );
              }
            }}
            variant={'secondary'}
          >
            Request loan
          </Button>
        )}
      </span>
    </li>
  );
}
