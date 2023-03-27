import React from 'react';
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
      <div className='w-full flex flex-col mt-20 mb-6 text-center'>
        <h2 className='text-3xl font-bold mb-4'>Best Seller At LINEUP</h2>
        <p className='w-96 mx-auto'>
          LINEUP has been the industry's standard football market ever since the
          1994s
        </p>
      </div>
      <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4 max-w-screen-2xl mx-auto'>
        {products &&
          products.map((product: IProdcutProps | any) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </ul>
    </>
  );
}
