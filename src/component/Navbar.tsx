import React from 'react';
import { Link } from 'react-router-dom';
import { GiSoccerBall } from 'react-icons/gi';
import { TbSoccerField } from 'react-icons/tb';
import { HiPencil } from 'react-icons/hi';

export default function Navbar() {
  return (
    <header className='flex justify-between border-b border-gray-300'>
      <Link to='/' className='flex items-center text-4xl text-brand'>
        <GiSoccerBall />
        {/* <TbSoccerField /> */}
        <h1>AllThatSoccer</h1>
      </Link>
      <nav className='flex items-center gap-4 font-semibold'>
        <Link to='/products'>Products</Link>
        <Link to='/cart'>Carts</Link>
        <Link to='/products/new' className='text-2xl'>
          <HiPencil />
        </Link>
        <button>Login</button>
      </nav>
    </header>
  );
}
