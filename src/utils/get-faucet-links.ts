import { Chain } from 'viem';
import { chains } from '../config/chains';

export default function getFaucetLink(chain: Chain) {
  switch (chain.id) {
    case chains.alys.id:
      return 'https://faucet.anduro.io/alys';
    default:
      return null;
  }
}
