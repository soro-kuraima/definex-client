'use client';

import { GlobeLockIcon } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

import { Controller, useForm } from 'react-hook-form';
import { useState } from 'react';
import { useAccount } from 'wagmi';
import {
  useReadAlysNftp2PMarketGetActiveListing,
  useWriteAlysNftApprove,
  useWriteAlysNftCreateNft,
  useWriteAlysNftp2PMarketListNft,
  useWriteAlysNftp2PMarketUnlistNft,
} from '@/wagmi.generated';
import { parseEther } from 'viem';
import { useReadAlysNftGetTokenUnits } from '@/wagmi.generated';
import { useRouter } from 'next/router';
import { useSearchParams } from 'next/navigation';
import { toast } from 'sonner';

type AssetHeaderProps = {
  name: string;
  ticker: string;
  homePageUrl: string;
  logoUrl: string;
  preMarket: number;
  close: number;
  afterHours: number;
  date: string;
  description: string;
  openPrice: number;
  closePrice: number;
  highPrice: number;
  lowPrice: number;
  alysToUSD: number;
};

export function AssetHeader({
  name,
  ticker,
  homePageUrl,
  logoUrl,
  preMarket,
  close,
  afterHours,
  date,
  description,
  openPrice,
  closePrice,
  highPrice,
  lowPrice,
  alysToUSD,
}: AssetHeaderProps) {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    defaultValues: {
      units: 1,
    },
  });
  const searchParams = useSearchParams();

  const tokenUnits = Number.parseInt(searchParams.get('tokenUnits')!);

  const value = Number.parseInt(searchParams.get('value')!);

  const tokenId = BigInt(Number.parseInt(searchParams.get('tokenId')!));

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

  return (
    <div className="">
      <div className="flex items-center gap-8 pb-2 border-b">
        <div className="flex items-center">
          <p className="text-2xl font-bold">{name}</p>
          <p className="text-2xl">{`(${ticker})`}</p>
        </div>
        <div className="flex items-center">
          <Link
            href={homePageUrl ?? '#'}
            target="_blank"
            className="flex items-center text-secondary-foreground"
          >
            <GlobeLockIcon className="w-4 h-4" />
            <span className="ml-2">visit site</span>
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-8 pb-2 border-b">
        <div className="flex items-center">
          <p className="text-2xl font-bold">{`Units owned: ${tokenUnits}`}</p>
          <p className="text-2xl">{`(${ticker})`}</p>
        </div>
        <div className="flex items-center">
          <p className="text-2xl font-bold">{`Current Value: $ ${value} /-`}</p>
        </div>
      </div>

      <div className="flex justify-between py-2">
        <div className="flex gap-16">
          <div className="flex flex-col">
            <p className="text-2xl font-bold">{`\$${preMarket}`}</p>
            <p className="text-sm">{`pre-market on ${date}`}</p>
          </div>
          <div className="flex flex-col">
            <p className="text-2xl font-bold">{`\$${close}`}</p>
            <p className="text-sm">{`closed on ${date}`}</p>
          </div>
          <div className="flex flex-col">
            <p className="text-2xl font-bold">{`\$${afterHours}`}</p>
            <p className="text-sm">{`after hours on ${date}`}</p>
          </div>
        </div>
        <div className="list-button flex flex-col gap-1">
          <Button
            disabled={listingPending || unlistingPending || approvalPending}
            onClick={async () => {
              await approveMarketPlace({
                args: ['0xe7b32384D4B4E3F474aEA14c42b8317e939df593', tokenId],
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
                    args: [tokenId, BigInt(Math.ceil(value))],
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
          >{`${listingStatus ? 'Unlist' : 'List'} in Market`}</Button>
          {listingStatus && <Button variant={'secondary'}>Request loan</Button>}
        </div>
      </div>
    </div>
  );
}
