import React, { useState } from 'react';
import { useLocation } from 'react-router';
import { useAuthContext } from '../context/AuthContext';
import useCart from '../hooks/useCart';
import Button from '../shared/Button';

export default function ProductDetail() {
  const { addOrUpdateItem } = useCart();
  const {
    state: {
      product: { id, image, title, description, category, price, options },
    },
  } = useLocation();

  const [success, setSuccess] = useState<string | null>();
  const [selected, setSelected] = useState(options && options[0]);
  const handleSelect = (e: { target: { value: string } }) =>
    setSelected(e.target.value);

  const handleAddCart = () => {
    const product: any = {
      id,
      image,
      title,
      price,
      category,
      option: selected,
      quantity: 1,
    };
    addOrUpdateItem.mutate(product, {
      onSuccess: () => {
        setSuccess('장바구니에 추가되었습니다.');
        setTimeout(() => setSuccess(null), 3000);
      },
    });
  };

  return (
    <>
      <section className='flex flex-col md:flex-row p-4'>
        <img
          className='md:w-96 md:px-4 md:mb-0 mb-10 basis-6/12'
          src={image}
          alt={title}
        />
        <div className='w-full basis-6/12 flex flex-col md:px-10'>
          <p className='text-gray-500'>{category}</p>
          <h2 className='text-2xl font-bold py-2'>{title}</h2>
          <p className='text-xl font-medium py-1'>{price}원</p>
          <p className='mt-4 mb-10 text-base'>{description}</p>
          <div className='flex items-center mb-5'>
            <label className='text-brand text-lg font-bold' htmlFor='select'>
              SIZE
            </label>
            <select
              id='select'
              className='p-2 my-4 ml-4 flex-1 border border-brand outline-none'
              onChange={handleSelect}
              value={selected}
            >
              {options &&
                options.map((option: string, idx: number) => (
                  <option key={idx}>{option}</option>
                ))}
            </select>
          </div>
          {success && <p className='my-2'>📍 {success}</p>}
          <Button
            text='장바구니에 추가'
            colorCode={'bg-brand'}
            onClick={handleAddCart}
          />
        </div>
      </section>
    </>
  );
}
