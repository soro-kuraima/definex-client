'use client';

import { useAccount } from 'wagmi';
import { useAuth } from '../_hooks/useAuth';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Button } from '@/components/ui/button';
import { copyToClipboard } from '@/utils/copy-to-clipboard';
import toast from 'react-hot-toast';
import { LogOutIcon } from 'lucide-react';

import '@rainbow-me/rainbowkit/styles.css';

export const CustomConnectButton = ({ connectLabel = 'Launch App' }) => {
  const { handleLogin, handleLogout } = useAuth();
  const { isConnected, address } = useAccount();

  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        const ready = mounted && authenticationStatus !== 'loading';
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === 'authenticated');

        return (
          <div
            {...(!ready && {
              'aria-hidden': true,
              style: {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <Button
                    onClick={openConnectModal}
                    type="button"
                    className="px-12 py-6 text-xl rounded-xl font-bold"
                  >
                    {connectLabel}
                  </Button>
                );
              }

              if (chain.unsupported) {
                return (
                  <Button
                    onClick={openChainModal}
                    type="button"
                    className="px-12 py-6 text-xl rounded-xl font-bold"
                  >
                    Wrong network
                  </Button>
                );
              }

              return (
                <div style={{ display: 'flex', gap: 12 }}>
                  <Button
                    onClick={openChainModal}
                    variant={'ghost'}
                    className="font-semibold hover:bg-secondary px-4 py-1 rounded-xl"
                    type="button"
                  >
                    {chain.hasIcon && (
                      <div
                        style={{
                          background: chain.iconBackground,
                          width: 12,
                          height: 12,
                          borderRadius: 999,
                          overflow: 'hidden',
                          marginRight: 4,
                        }}
                      >
                        {chain.iconUrl && (
                          <img
                            alt={chain.name ?? 'Chain icon'}
                            src={chain.iconUrl}
                            style={{ width: 12, height: 12 }}
                          />
                        )}
                      </div>
                    )}
                    {chain.name}
                  </Button>

                  <Button
                    onClick={() => {
                      copyToClipboard(address);
                      toast.success('Copied to clipboard');
                    }}
                    type="button"
                    className="px-4 py-1 bg-secondary hover:bg-secondary/80 rounded-xl"
                  >
                    {account.displayName}
                    {account.displayBalance
                      ? ` (${account.displayBalance})`
                      : ''}
                  </Button>

                  {isConnected ? (
                    <Button
                      variant={'link'}
                      size={'icon'}
                      onClick={handleLogout}
                      className="text-secondary"
                    >
                      <LogOutIcon />
                    </Button>
                  ) : (
                    <Button
                      variant={'link'}
                      size={'icon'}
                      onClick={handleLogin}
                      className="text-secondary"
                    >
                      Login
                    </Button>
                  )}
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};
