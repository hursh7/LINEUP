import React from 'react';
import { useNavigate } from 'react-router';

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
      className='flex flex-col rounded-lg shadow-md overflow-hidden cursor-pointer transition-all'
    >
      <div className='flex w-full h-2/3 relative'>
        <img
          className='w-full h-full object-cover object-bottom'
          src={image}
          alt={title}
        />
      </div>
      <div className='mt-2 px-2 flex flex-col'>
        <div>
          <p className='text-gray-400 text-sm'>{category}</p>
          <h3 className='truncate mb-2'>{title}</h3>
        </div>
        <p>{`₩${price}`}</p>
        <ul className='flex gap-2'>
          {options && options.map(option => <li key={option}>{option}</li>)}
        </ul>
      </div>
    </li>
  );
}
