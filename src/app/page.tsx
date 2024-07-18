'use client';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Image from 'next/image';
import { CustomConnectButton } from './_components/connect-button';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useAccount } from 'wagmi';

export default function Home() {
  const { isConnected } = useAccount();
  const { data: session, status } = useSession();
  const router = useRouter();

  if (isConnected && status === 'authenticated') {
    router.push('/home/portfolio');
    return null; // or a loading indicator
  }

  const logo = `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmUpx566ZAPtQFw8u5JsEpcCgn2XXX5kE8z1ZUdKtDm2cv`;

  const mockup = `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmYonbZHZvTJJfYbpYqk9gjBKDdiM3eE5MF6hejNR6iN1u`;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <img src={logo} width={100} height={100} alt="Logo" />
      </div>
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <div className="mt-10 md:mt-16 flex flex-col items-center justify-center gap-2.5 p-[1rem] md:p-0">
          <h1 className="text-center text-[28px] md:text-[55px]">
            Trade with Cross Border De-fi
          </h1>
          <h2 className="text-center text-[20px] md:text-[40px]">
            Trade in US Stocks from your wallet
          </h2>
          <h4 className="text-center text-[16px] md:text-[26px]">
            Cross border, P2P trading on largest Blockchain.
          </h4>
          <div className="mb-32 flex justify-center items-center content-center text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
            <CustomConnectButton />
          </div>
          <div className="h-96">
            <img
              src={mockup}
              width={900}
              height={500}
              className="object-cover"
              alt=""
            />
          </div>
        </div>
      </div>
    </main>
  );
}
