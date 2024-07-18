'use client';

import { useState } from 'react';
import { useAccount, useTransaction } from 'wagmi';
import { useWriteAlysNftBurn, useSimulateAlysNftBurn } from '@/wagmi.generated';

function BurnNFT() {
  const [isBurning, setIsBurning] = useState(false);
  const { address } = useAccount();

  const tokenId = BigInt(4); // The token ID you want to burn

  // Simulate the burn transaction
  const { data: simulateData, error: simulateError } = useSimulateAlysNftBurn({
    args: [tokenId],
    account: address,
  });

  // Set up the burn transaction
  const {
    writeContract: burnNft,
    data: burnData,
    error: burnError,
  } = useWriteAlysNftBurn();

  // Wait for the transaction to be mined
  const { isLoading, isSuccess } = useTransaction({
    hash: burnData?.hash,
  });

  const handleBurn = async () => {
    if (!simulateData?.request) return;
    setIsBurning(true);
    try {
      await burnNft(simulateData.request);
    } catch (err) {
      console.error('Failed to burn NFT:', err);
    } finally {
      setIsBurning(false);
    }
  };

  if (simulateError || burnError) {
    return <div>Error: {(simulateError || burnError)?.message}</div>;
  }

  return (
    <div>
      <button
        onClick={handleBurn}
        disabled={!simulateData?.request || isBurning || isLoading}
      >
        {isLoading ? 'Burning...' : 'Burn NFT (Token ID: 0)'}
      </button>
      {isSuccess && (
        <div>
          Successfully burned NFT!
          <div>
            <a
              href={`https://etherscan.io/tx/${burnData?.hash}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on Etherscan
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default BurnNFT;
