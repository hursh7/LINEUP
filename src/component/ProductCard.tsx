import React from 'react';
import { useNavigate } from 'react-router';

type IProdcut = {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  price: number;
  options: number[];
};

type IProdcutProps = {
  product: IProdcut;
};

export default function ProductCard({
  product,
  product: { id, image, title, price, category },
}: IProdcutProps) {
  const naviagate = useNavigate();

  return (
    <li
      onClick={() => naviagate(`/products/${id}`, { state: { product } })}
      className='rounded-lg shadow-md overflow-hidden cursor-pointer transition-all hover:scale-105'
    >
      <img className='w-full' src={image} alt={title} />
      <div className='mt-2 px-2 text-lg flex justify-between items-center'>
        <h3 className='truncate'>{title}</h3>
        <p>{`₩${price}`}</p>
      </div>
      <p className='mb-2 px-2 text-gray-600'>{category}</p>
    </li>
  );
}
