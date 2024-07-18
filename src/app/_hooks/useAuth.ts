// src/hooks/useAuth.ts
'use client';

import { useAccount, useSignMessage, useChainId, useDisconnect } from 'wagmi';
import { redirect, useRouter } from 'next/navigation';
import { SiweMessage } from 'siwe';
import { signIn, signOut, useSession } from 'next-auth/react';

export function useAuth() {
  const { address, isConnected } = useAccount();
  const chainId = useChainId();
  const { signMessageAsync } = useSignMessage();
  const router = useRouter();
  const { data: session } = useSession();

  const { disconnect } = useDisconnect();

  const handleLogin = async () => {
    if (!isConnected) {
      console.error('Wallet not connected');
      return;
    }

    try {
      const callbackUrl = '/portfolio';
      const nonce = await fetch('../../api/auth/nonce').then((res) =>
        res.text()
      );

      const message = new SiweMessage({
        domain: window.location.host,
        address: address,
        statement: 'Sign in with Alys to the app.',
        uri: window.location.origin,
        version: '1',
        chainId: chainId,
        nonce: nonce,
      });

      const signature = await signMessageAsync({
        message: message.prepareMessage(),
      });

      const response = await signIn('credentials', {
        message: JSON.stringify(message),
        signature,
        redirect: false,
        callbackUrl,
      });

      console.log('Sign-in response:', response);

      if (response?.ok) {
        console.log('Login successful, redirecting to:', callbackUrl);
        router.push(callbackUrl);
      } else {
        console.error('Login failed:', response?.error);
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const handleLogout = async () => {
    await signOut();
    disconnect();
    redirect('/');
  };

  return { handleLogin, handleLogout, isConnected: isConnected && !!session };
}
