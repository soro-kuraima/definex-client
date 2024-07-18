import { Button } from '@/components/ui/button';
import { copyToClipboard } from '@/utils/copy-to-clipboard';
import { CopyIcon } from 'lucide-react';

type AssetDetailsProps = {
  previousOpen: number;
  previousClose: number;
  previousHigh: number;
  previousLow: number;
  volume: number;
  marketCap: number;
  totalEmployees: number;
  sicDescription: string;
  cik: number;
  compositeFigi: string;
  description: string;
};

export function AssetDetails({
  previousOpen,
  previousClose,
  previousHigh,
  previousLow,
  volume,
  marketCap,
  totalEmployees,
  sicDescription,
  cik,
  compositeFigi,
  description,
}: AssetDetailsProps) {
  return (
    <div className="asset-details py-4">
      <div className="flex gap-16">
        <div className="">
          <div className="border-b border-dotted">
            <p className="">
              {`Previous Open: `}
              <strong className="font-bold">{`\$ ${previousOpen}`}</strong>
            </p>
          </div>
          <div className="border-b border-dotted">
            <p className="">
              {`Previous Close: `}
              <strong className="font-bold">{`\$ ${previousClose}`}</strong>
            </p>
          </div>
          <div className="border-b border-dotted">
            <p className="">
              {`Previous High: `}
              <strong className="font-bold">{`\$ ${previousHigh}`}</strong>
            </p>
          </div>
          <div className="border-b border-dotted">
            <p className="">
              {`Previous Low: `}
              <strong className="font-bold">{`\$ ${previousLow}`}</strong>
            </p>
          </div>
        </div>
        <div className="">
          <div className="border-b border-dotted">
            <p className="">
              {`Volume: `}
              <strong className="font-bold">{`\$ ${volume}`}</strong>
            </p>
          </div>
          <div className="border-b border-dotted">
            <p className="">
              {`Market Cap: `}
              <strong className="font-bold">{`${marketCap}`}</strong>
            </p>
          </div>
          <div className="border-b border-dotted">
            <p className="">
              {`Total Employees: `}
              <strong className="font-bold">{`${totalEmployees}`}</strong>
            </p>
          </div>
          <div className="border-b border-dotted">
            <p className="">
              {`SIC Description: `}
              <strong className="font-bold">{`${sicDescription}`}</strong>
            </p>
          </div>
        </div>
        <div className="">
          <div className="border-b border-dotted flex gap-1 items-center">
            <p className="">
              {`CIK: `}
              <strong className="font-bold">{`${cik}`}</strong>
            </p>
          </div>
          <div className="border-b border-dotted flex gap-1 items-center">
            <p className="">
              {`Composite FIGI: `}
              <strong className="font-bold">{`${compositeFigi}`}</strong>
            </p>
          </div>
        </div>
      </div>
      <div className="bg-card rounded-xl py-2 pb-6 px-4 my-4 text-justify">
        <h2 className="my-4 text-xl text-secondary">About</h2>
        <p className="">{description}</p>
      </div>
    </div>
  );
}
