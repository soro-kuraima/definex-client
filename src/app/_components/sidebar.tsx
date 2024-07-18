'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { ToggleTheme } from './toggle-theme';

const Sidebar = () => {
  const activeStyle =
    'bg-primary font-bold text-primary-foreground w-full p-5 px-7';

  const pathname = usePathname();
  const { theme } = useTheme();

  const logoLightCid = 'QmUpx566ZAPtQFw8u5JsEpcCgn2XXX5kE8z1ZUdKtDm2cv';
  const logoDarkCid = 'QmVQY8KrJGCUYLbhujwNtWdT7a6kekTf38CKJ7BYW4qJf4';

  const logoFilePath = `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/${theme === 'dark' ? logoDarkCid : logoLightCid}`;

  return (
    <div className="w-[20%] h-[100vh] border-r border-primary">
      <div className="w-[100%] hidden py-8 lg:flex md:flex flex-col">
        <p className="text-[18px] flex justify-between items-center mt-4 mb-14 mx-4">
          <img src={logoFilePath} alt="logo" className="h-28 w-28" />
          <ToggleTheme />
        </p>
        <Link
          className={`link flex items-center py-4 px-8 my-4 ${pathname.startsWith('/home/explore') ? activeStyle : ''}`}
          href="/home/explore"
        >
          Explore
        </Link>
        <Link
          className={`link flex items-center py-4 px-8 my-4 ${pathname.startsWith('/home/portfolio') ? activeStyle : ''}`}
          href="/home/portfolio"
        >
          Portfolio
        </Link>
        <Link
          className={`link flex items-center py-4 px-8 my-4 ${pathname.startsWith('/home/p2p') ? activeStyle : ''}`}
          href="/home/p2p"
        >
          P2P
        </Link>
      </div>
      <div className="lg:hidden md:hidden h-[100vh] py-8 flex flex-col items-center border-r border-primary">
        <img
          src={'/img source'}
          alt="logo"
          className="w-[40px] h-[40px] mb-12"
        />
        <Link
          className={`link flex items-center py-4 px-8 my-4 ${pathname === '/home/explore' ? activeStyle : ''}`}
          href="/home/explore"
        >
          Explore
        </Link>
        <Link
          className={`link flex items-center py-4 px-8 my-4 ${pathname === '/home/portfolio' ? activeStyle : ''}`}
          href="/home/portfolio"
        >
          Portfolio
        </Link>
        <Link
          className={`link flex items-center py-4 px-8 my-4 ${pathname === '/home/portfolio' ? activeStyle : ''}`}
          href="/home/portfolio"
        >
          P2P
        </Link>
      </div>
    </div>
  );
};

export { Sidebar };
