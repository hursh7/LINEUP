import React from 'react';
import { priceToString } from '../utils/common';

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
            <p className='sm:text-2xl font-semibold'>TOTAL</p>
            <p className='sm:text-2xl font-semibold text-brand'>
              ₩{priceToString(price)}
            </p>
          </div>
        </>
      ) : (
        <div className='flex justify-between sm:text-base'>
          <p>{text}</p>
          <p className='font-semibold text-brand sm:text-lg'>
            ₩{priceToString(price)}
          </p>
        </div>
      )}
    </>
  );
}
