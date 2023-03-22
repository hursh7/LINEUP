import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { getProducts } from '../api/firebase';
import useProducts from '../hooks/useProducts';
import ProductCard from './ProductCard';

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

export default function Products() {
  const {
    productsQuery: { isLoading, error, data: products },
  } = useProducts();

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{`${error}`}</p>}
      <h2 className='text-center mt-4 text-2xl font-semibold'>Best Item</h2>
      <ul className='grid grid-cols-1 md:grid-cols-3 lg-gird-cols-4 gap-4 p-4'>
        {products &&
          products.map((product: IProdcutProps | any) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </ul>
    </>
  );
}
