import React from 'react';

type IPriceCard = {
  text: string;
  price: any;
  isTotal?: boolean;
};

export default function PriceCard({ text, price, isTotal }: IPriceCard) {
  return (
    <>
      {isTotal ? (
        <>
          <div className='border-b-2 border-gray-300 mb-4'></div>
          <div className='flex justify-between mb-6'>
            <p className='text-2xl font-semibold'>TOTAL</p>
            <p className='font-semibold text-brand text-2xl'>₩{price}</p>
          </div>
        </>
      ) : (
        <div className='flex justify-between'>
          <p>{text}</p>
          <p className='font-semibold text-brand text-lg'>₩{price}</p>
        </div>
      )}
    </>
  );
}
