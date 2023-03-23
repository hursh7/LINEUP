import React from 'react';
import { useNavigate } from 'react-router';
import Button from '../shared/Button';

export default function Banner() {
  const naviagate = useNavigate();

  const handleLink = () => {
    naviagate('/products');
  };

  return (
    <section className='h-screen relative flex items-center bg-gray-200 drop-shadow-2xl'>
      <div className='w-1/2 text-gray-600 hidden lg:block justify-self-center pl-20'>
        <h2 className='text-6xl lg:text-8xl font-semibold mb-16'>
          <p className='drop-shadow-xl'>
            Best <span className='text-brand'>LINEUP</span> For
          </p>
          <p className='drop-shadow-xl'>Your Fashion</p>
          <p className='drop-shadow-xl'>and Passion</p>
        </h2>
        <Button
          text={'See Products'}
          colorCode={'bg-brand'}
          onClick={handleLink}
        ></Button>
      </div>
      <div className='lg:w-1/2 w-full h-full bg-cover bg-banner opacity-80' />
    </section>
  );
}
