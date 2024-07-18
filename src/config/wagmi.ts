import { http, createConfig } from 'wagmi';
import { chains } from './chains';

export const wagmiConfig = createConfig({
  chains: [chains.alys],
  transports: {
    [chains.alys.id]: http('http://54.226.158.187'),
  },
  ssr: true,
});
