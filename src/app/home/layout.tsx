'use client';
import { Sidebar } from '../_components/sidebar';
import { CustomConnectButton } from '../_components/connect-button';
import { useTheme } from 'next-themes';

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { theme } = useTheme();

  const logoLightCid = 'QmUpx566ZAPtQFw8u5JsEpcCgn2XXX5kE8z1ZUdKtDm2cv';
  const logoDarkCid = 'QmVQY8KrJGCUYLbhujwNtWdT7a6kekTf38CKJ7BYW4qJf4';

  const logoFilePath = `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/${theme === 'dark' ? logoDarkCid : logoLightCid}`;
  return (
    <div className="flex lg:items-center md:items-center">
      <Sidebar />
      <div className="w-[100%] lg:w-[79%] md:w-[79%] h-[100vh] overflow-y-scroll py-8 flex flex-col">
        <div className="w-[100%] flex justify-between items-center gap-8 mb-10 pb-6 border-b shadow-md">
          <div className="flex gap-4 items-center px-8">
            <img src={logoFilePath} alt="logo" className="h-16 w-16" />
            <span className="text-primary text-4xl font-bold m-0 p-0">
              defi-<em>neX</em>
            </span>
          </div>
          <CustomConnectButton />
        </div>
        <div className="py-4 px-8">{children}</div>
      </div>
    </div>
  );
}
