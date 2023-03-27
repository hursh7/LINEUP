import React from 'react';
import { BiMinus, BiPlus } from 'react-icons/bi';
import { IoMdClose } from 'react-icons/io';
import useCart from '../hooks/useCart';
import { priceToString } from '../utils/common';

type IProdcut = {
  id: string;
  title: string;
  quantity: number;
  description: string;
  image: string;
  price: number;
  option: string;
  category: string;
};

type IProdcutProps = {
  product: IProdcut | any;
  subTotal: number;
};

export default function CartItem({
  product,
  subTotal,
  product: { id, image, title, option, price, category, quantity },
}: IProdcutProps) {
  const { addOrUpdateItem, removeItem } = useCart();

  const handleMinus = () => {
    if (quantity < 2) return;
    addOrUpdateItem.mutate({ ...product, quantity: quantity - 1 });
  };

  const handlePlus = () =>
    addOrUpdateItem.mutate({ ...product, quantity: quantity + 1 });

  const handleDelete = () => removeItem.mutate(id);

  return (
    <li className='flex justify-between my-2 items-center'>
      <img className='sm:w-20 md:w-32 w-14' src={image} alt={title} />
      <div className='flex-1 flex justify-between ml-4'>
        <div>
          <p className='font-semibold md:text-base text-sm'>
            {`${title} (${option})`}{' '}
          </p>
          <p className='text-gray-400 mb-2 md:text-base text-sm'>{category}</p>
          <p className='sm:flex hidden font-semibold md:text-lg text-sm'>
            ₩{priceToString(price)}
          </p>
          <p className='sm:hidden block justify-end font-semibold text-brand md:text-2xl text-sm md:w-48 w-20 '>
            ₩{priceToString(subTotal)}
          </p>
        </div>
        <div className='text-xl flex items-center justify-between'>
          <div className='flex items-center justify-between md:w-28 w-24 border-2 border-gray-300 py-2'>
            <BiMinus
              className='cursor-pointer mx-2 md:text-xl text-lg'
              onClick={handleMinus}
            />
            <span className='mx-2 font-semibold md:text-xl text-sm'>
              {quantity}
            </span>
            <BiPlus
              className='cursor-pointer mx-2 md:text-xl text-lg'
              onClick={handlePlus}
            />
          </div>
          <div className='flex items-center'>
            <p className='sm:flex hidden justify-end font-semibold text-brand md:text-2xl text-sm md:w-48 w-20 '>
              ₩{priceToString(subTotal)}
            </p>
            <IoMdClose
              className='cursor-pointer sm:ml-6 ml-2 md:text-2xl text-lg'
              onClick={handleDelete}
            />
          </div>
        </div>
      </div>
    </li>
  );
}
