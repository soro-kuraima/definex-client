'use client';

import * as React from 'react';
import {
  GetSiweMessageOptions,
  RainbowKitSiweNextAuthProvider,
} from '@rainbow-me/rainbowkit-siwe-next-auth';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { SessionProvider } from 'next-auth/react';
import type { Session } from 'next-auth';
import { WagmiProvider } from 'wagmi';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { wagmiConfig } from '../config/wagmi';

type ClientProvidersProps = {
  children: React.ReactNode;
  pageProps?: {
    session: Session;
  };
};

const getSiweMessageOptions: GetSiweMessageOptions = () => ({
  statement: 'Sign in with Alys to defineX',
});

export function ClientProviders({ children, pageProps }: ClientProvidersProps) {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <WagmiProvider config={wagmiConfig} reconnectOnMount={true}>
      <SessionProvider refetchInterval={0} session={pageProps?.session}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitSiweNextAuthProvider
            getSiweMessageOptions={getSiweMessageOptions}
          >
            <RainbowKitProvider modalSize="compact">
              {children}
            </RainbowKitProvider>
          </RainbowKitSiweNextAuthProvider>
          <ReactQueryDevtools initialIsOpen={true} />
        </QueryClientProvider>
      </SessionProvider>
    </WagmiProvider>
  );
}
