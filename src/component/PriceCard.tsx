import React from 'react';

type IPriceCard = {
  text: string;
  price: any;
};

export default function PriceCard({ text, price }: IPriceCard) {
  return (
    <div className='bg-gray-50 p-8 mx-2 rounded-2xl text-center text-lg md:text-xl'>
      <p>{text}</p>
      <p className='font-bold text-brand text-xl md:text-2xl'>₩{price}</p>
    </div>
  );
}
