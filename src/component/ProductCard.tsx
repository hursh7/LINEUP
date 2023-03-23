import React from 'react';
import { useNavigate } from 'react-router';
import SizeItem from './SizeItem';

type IProdcut = {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  price: number;
  options: string[];
};

type IProdcutProps = {
  product: IProdcut;
};

export default function ProductCard({
  product,
  product: { id, image, title, price, category, options },
}: IProdcutProps) {
  const naviagate = useNavigate();

  return (
    <li
      onClick={() => naviagate(`/products/${id}`, { state: { product } })}
      className='flex flex-col rounded-lg shadow-md overflow-hidden cursor-pointer transition-all h-full'
    >
      <div className='flex w-full h-4/5 relative'>
        <img
          className='w-full h-full object-cover object-bottom'
          src={image}
          alt={title}
        />
      </div>
      <div className='p-4 flex flex-col'>
        <div>
          <p className='text-gray-400 text-sm'>{category}</p>
          <h3 className='truncate mb-2 text-lg font-semibold'>{title}</h3>
        </div>
        <p className='mb-2 text-lg font-bold text-brand tracking-tighter'>{`₩ ${price}`}</p>
        <ul className='flex gap-2'>
          {options &&
            options.map(option => <SizeItem key={option} option={option} />)}
        </ul>
      </div>
    </li>
  );
}
