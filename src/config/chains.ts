import { Chain } from 'wagmi/chains';

const alys = {
  id: 212121,
  name: 'Alys Testnet',
  nativeCurrency: { name: 'TAlys', symbol: 'TAlys', decimals: 18 },
  rpcUrls: {
    default: { http: ['http://54.226.158.187'] },
  },
  testnet: true,
} as const satisfies Chain;

export const chains = { alys };
