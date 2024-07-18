'use client';

import { useAccount } from 'wagmi';
import {
  useReadAlysNftGetNfTsOwnedBy,
  useReadAlysNftTokenUri,
  useWriteAlysNftTransferNft,
  useSimulateAlysNftTransferNft,
} from '@/wagmi.generated';
import { useState, useEffect } from 'react';

import { Button } from '@/components/ui/button';
import { NFTDetails } from './nft-details';

function UserNFTs() {
  const { address } = useAccount();
  const [nftDetails, setNftDetails] = useState<
    Array<{ id: bigint; uri: string | undefined }>
  >([]);

  const {
    data: ownedNFTs,
    isError,
    isLoading,
  } = useReadAlysNftGetNfTsOwnedBy({
    args: [address!],
  });

  useEffect(() => {
    if (ownedNFTs && ownedNFTs.length > 0) {
      setNftDetails(
        ownedNFTs.map((tokenId) => ({ id: tokenId, uri: undefined }))
      );
    }
  }, [ownedNFTs]);

  console.log('logging from user nfts', ownedNFTs);

  console.log('logging from user nfts', nftDetails);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching NFTs</div>;
  if (ownedNFTs === undefined || ownedNFTs.length === 0) {
    return <div>No NFTs found</div>;
  }

  return (
    <div>
      <ul className="flex gap-8">
        {nftDetails.map((nft) => (
          <NFTDetails key={nft.id.toString()} tokenId={nft.id} />
        ))}
      </ul>
    </div>
  );
}

export { UserNFTs };
