'use client';

import { GlobeLockIcon } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Controller, useForm } from 'react-hook-form';
import { useState } from 'react';
import { useAccount } from 'wagmi';
import { useWriteAlysNftCreateNft } from '@/wagmi.generated';
import { parseEther } from 'viem';

async function getGenerateAssetNFTImage(name: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/generate-asset-nft-image?name=${name}`
  );
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

async function postMorphAssetNFTImage(
  url1: string,
  url2: string,
  ticker: string,
  units: number
) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/morph-asset-nft-image`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url1, url2, ticker, units }),
    }
  );
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res;
}

type AssetHeaderProps = {
  name: string;
  ticker: string;
  homePageUrl: string;
  logoUrl: string;
  preMarket: number;
  close: number;
  afterHours: number;
  date: string;
  description: string;
  openPrice: number;
  closePrice: number;
  highPrice: number;
  lowPrice: number;
  alysToUSD: number;
};

export function AssetHeader({
  name,
  ticker,
  homePageUrl,
  logoUrl,
  preMarket,
  close,
  afterHours,
  date,
  description,
  openPrice,
  closePrice,
  highPrice,
  lowPrice,
  alysToUSD,
}: AssetHeaderProps) {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    defaultValues: {
      units: 1,
    },
  });

  const unitsValue = watch('units');

  const stockPrice = (openPrice + closePrice + highPrice + lowPrice) / 4;

  const [imageUrl, setImageUrl] = useState(' ');
  const [generatingNFT, setGeneratingNFT] = useState(false);

  const { address } = useAccount();

  const {
    writeContractAsync: createNFT,
    isSuccess,
    isError,
    isPending,
  } = useWriteAlysNftCreateNft();

  const handleCreateNFT = (uriImage: string) => {
    if (!address) {
      throw new Error('No address found');
    }

    const priceInWei = parseEther(
      ((stockPrice * unitsValue) / alysToUSD).toString()
    );

    createNFT({
      args: [address, uriImage, priceInWei, ticker, unitsValue],
      value: priceInWei, // This is the msg.value in your Solidity function
    });
  };

  const onSubmit = async (data: { units: number }) => {
    console.log(data);

    const generateAssetNFTRes = await getGenerateAssetNFTImage(name);
    setGeneratingNFT(true);
    console.log(generateAssetNFTRes.imageUrl);

    const morphAssetNFTRes = await postMorphAssetNFTImage(
      generateAssetNFTRes.imageUrl,
      logoUrl,
      ticker,
      data.units
    );

    const blob = await morphAssetNFTRes.blob();

    const fileName = `${ticker}_${Date.now()}`; // Replace with your desired file name
    const fileType = 'image/png'; // Replace with the appropriate MIME type

    const nftImageFile = new File([blob], fileName, { type: fileType });

    const formData = new FormData();
    formData.append('file', nftImageFile);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/api/pinata/upload-nft-asset`,
        {
          method: 'POST',
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error('Upload failed');
      }

      const data = await response.json();
      console.log(data);
      handleCreateNFT(data.cid);
    } catch (err) {
      console.error(err);
    }
    const objectUrl = URL.createObjectURL(blob);
    console.log(objectUrl);
    setImageUrl(objectUrl);
  };

  const incrementUnits = () => {
    const currentUnits = unitsValue || 0;
    if (currentUnits < 5) {
      setValue('units', currentUnits + 1, { shouldValidate: true });
    }
  };

  const decrementUnits = () => {
    const currentUnits = unitsValue || 0;
    if (currentUnits > 1) {
      setValue('units', currentUnits - 1, { shouldValidate: true });
    }
  };

  return (
    <div className="">
      <div className="flex items-center gap-8 pb-2 border-b">
        <div className="flex items-center">
          <p className="text-2xl font-bold">{name}</p>
          <p className="text-2xl">{`(${ticker})`}</p>
        </div>
        <div className="flex items-center">
          <Link
            href={homePageUrl ?? '#'}
            target="_blank"
            className="flex items-center text-secondary-foreground"
          >
            <GlobeLockIcon className="w-4 h-4" />
            <span className="ml-2">visit site</span>
          </Link>
        </div>
      </div>
      <div className="flex justify-between py-2">
        <div className="flex gap-16">
          <div className="flex flex-col">
            <p className="text-2xl font-bold">{`\$${preMarket}`}</p>
            <p className="text-sm">{`pre-market on ${date}`}</p>
          </div>
          <div className="flex flex-col">
            <p className="text-2xl font-bold">{`\$${close}`}</p>
            <p className="text-sm">{`closed on ${date}`}</p>
          </div>
          <div className="flex flex-col">
            <p className="text-2xl font-bold">{`\$${afterHours}`}</p>
            <p className="text-sm">{`after hours on ${date}`}</p>
          </div>
        </div>
        <div className="buy-button">
          <Sheet>
            <SheetTrigger asChild>
              <Button>Buy Asset</Button>
            </SheetTrigger>
            <SheetContent>
              {!generatingNFT && (
                <form onSubmit={handleSubmit(onSubmit)}>
                  <SheetHeader>
                    <SheetTitle>
                      <div className="flex items-center">
                        <p className="text-2xl font-bold">{name}</p>
                        <p className="text-2xl">{`(${ticker})`}</p>
                      </div>
                      <div className="flex items-center">
                        <Link
                          href={homePageUrl ?? '#'}
                          target="_blank"
                          className="flex items-center text-secondary-foreground"
                        >
                          <GlobeLockIcon className="w-4 h-4" />
                          <span className="ml-2">visit site</span>
                        </Link>
                      </div>
                    </SheetTitle>
                    <SheetDescription>
                      <div className="bg-card rounded-xl py-2 pb-6 px-4 my-4 text-justify">
                        <h2 className="my-4 text-xl text-secondary">About</h2>
                        <p className="">{description}</p>
                      </div>
                    </SheetDescription>
                  </SheetHeader>
                  <div className="sheet-main">
                    <div className="space-y-2">
                      <Label htmlFor="units">Enter units (1-5)</Label>
                      <div className="flex items-center space-x-2">
                        <Button
                          type="button"
                          onClick={decrementUnits}
                          disabled={unitsValue <= 1}
                        >
                          -
                        </Button>
                        <Controller
                          name="units"
                          control={control}
                          rules={{
                            required: 'Please enter 1-5 units',
                            pattern: {
                              value: /^[1-5]$/,
                              message: 'Please enter a number between 1 and 5',
                            },
                          }}
                          render={({ field }) => (
                            <Input
                              {...field}
                              type="number"
                              id="units"
                              min={1}
                              max={5}
                              defaultValue={1}
                              className={`w-20 text-center ${errors.units ? 'border-destructive' : ''}`}
                            />
                          )}
                        />
                        <Button
                          type="button"
                          onClick={incrementUnits}
                          disabled={unitsValue >= 5}
                        >
                          +
                        </Button>
                      </div>
                      {errors.units && (
                        <p className="text-red-500 text-sm">
                          {errors.units.message}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <p className="text-xl font-bold mt-4">Order Summary</p>
                      <div className="border border-dotted">
                        <p className="p-1">{`Unit Price:    $${stockPrice.toFixed(2)}`}</p>
                        <p className="p-1">{`Quantity:      ${unitsValue}`}</p>
                        <p className="p-1">{`Total:         $${(stockPrice * unitsValue).toFixed(2)}`}</p>
                        <p className="p-1">{`Total in Alys: ${((stockPrice * unitsValue) / alysToUSD).toFixed(6)} TALYS`}</p>
                      </div>
                    </div>
                  </div>
                  <SheetFooter>
                    <Button
                      disabled={generatingNFT}
                      size={'lg'}
                      type="submit"
                      className="mt-8"
                      onClick={() => {
                        //setGeneratingNFT(true);
                        handleSubmit(onSubmit);
                      }}
                    >
                      Mint Asset NFT
                    </Button>
                  </SheetFooter>
                </form>
              )}
              {generatingNFT && <img src={imageUrl} alt="Generated Image" />}
              {generatingNFT && isPending && <p>Generating NFT...</p>}
              {generatingNFT && isError && <p>Error generating NFT</p>}
              {generatingNFT && isSuccess && <p>NFT generated successfully!</p>}
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}
