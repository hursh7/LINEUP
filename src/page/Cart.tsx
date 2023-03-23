import React from 'react';
import CartItem from '../component/CartItem';
import PriceCard from '../component/PriceCard';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { FaEquals } from 'react-icons/fa';
import Button from '../shared/Button';
import useCart from '../hooks/useCart';

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

const SHIPPING = 3000;

export default function Cart() {
  const {
    cartQuery: { isLoading, data: products },
  } = useCart();

  if (isLoading) return <p>Loading...</p>;

  const hasProducts = products && products.length > 0;
  // const subTotalPrice = products.map(product => product.price)
  const totalPrice: any =
    products &&
    products.reduce(
      (prev: any, curr: any) => prev + parseInt(curr.price) * curr.quantity,
      0
    );

  return (
    <section className='p-10 flex flex-col  max-w-screen-2xl mx-auto'>
      <h2 className='text-3xl text-center font-bold mb-4'>장바구니</h2>
      {!hasProducts && <p>장바구니에 담긴 상품이 없습니다.</p>}
      {hasProducts && (
        // <div className='flex justify-between md:flex-row flex-col'>
        <div className='flex flex-col'>
          <ul className='mb-8 py-4 flex flex-col gap-5'>
            {products &&
              products.map((product: IProdcutProps | any) => (
                <CartItem key={product.id} product={product} />
              ))}
          </ul>
          <div className='flex flex-col bg-gray-200 mb-6 px-2 py-10 md:px-10 px-14'>
            <p className='text-2xl font-semibold pb-4 mb-4 border-b-2 border-gray-300'>
              Order Summary
            </p>
            <PriceCard text='상품 총액' price={totalPrice} />
            <div className='mb-1'></div>
            <PriceCard text='배송액' price={SHIPPING} />
            <div className='mb-4'></div>
            <PriceCard text='총가격' price={SHIPPING + totalPrice} isTotal />
            <Button text='주문하기' colorCode={'bg-brand'} />
          </div>
        </div>
      )}
    </section>
  );
}
