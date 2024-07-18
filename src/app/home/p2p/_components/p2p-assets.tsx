'use client';
import { useReadAlysNftGetAllNfTs } from '@/wagmi.generated';
import { useState, useEffect } from 'react';
import { createPublicClient, http, Address } from 'viem';
import { useAccount } from 'wagmi';
import {
  alysNftp2PMarketAbi,
  alysNftp2PMarketAddress,
} from '@/wagmi.generated';
import { chains } from '@/config/chains'; // Import your custom chains
import { Assets } from './assets';

// Define interfaces for our data structures
interface Listing {
  tokenId: bigint;
  seller: Address;
  price: bigint;
  isActive: boolean;
}

interface ListedNFT {
  tokenId: bigint;
  listing: Listing;
}

// Create a public client with your custom chain
const client = createPublicClient({
  chain: chains.alys,
  transport: http(chains.alys.rpcUrls.default.http[0]),
});

export function P2PAssets() {
  const { data: allNfts, isError, isLoading } = useReadAlysNftGetAllNfTs();
  const [listedNfts, setListedNfts] = useState<ListedNFT[]>([]);
  const { address: userAddress } = useAccount();

  useEffect(() => {
    if (allNfts && userAddress) {
      const fetchListedNfts = async () => {
        try {
          const results = await Promise.all(
            allNfts.map(
              (tokenId) =>
                client
                  .readContract({
                    address: alysNftp2PMarketAddress[212121],
                    abi: alysNftp2PMarketAbi,
                    functionName: 'getActiveListing',
                    args: [tokenId],
                  })
                  .catch(() => null) // Catch individual call errors
            )
          );

          const listedNftsData: ListedNFT[] = results
            .map((result, index) => {
              if (result && result.isActive && result.seller !== userAddress) {
                return {
                  tokenId: allNfts[index],
                  listing: result as Listing,
                };
              }
              return null;
            })
            .filter((item): item is ListedNFT => item !== null);

          setListedNfts(listedNftsData);
        } catch (error) {
          console.error('Error fetching listings:', error);
        }
      };

      fetchListedNfts();
    }
  }, [allNfts, userAddress]);

  if (isLoading) return <div>loading......</div>;
  if (isError) return <div>Error fetching NFTs</div>;

  return (
    <div className="flex gap-8">
      {listedNfts.map((nft) => (
        <Assets key={nft.tokenId.toString()} tokenId={nft.tokenId} />
      ))}
    </div>
  );
}
