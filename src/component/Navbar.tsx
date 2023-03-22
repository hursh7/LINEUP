import React from 'react';
import { Link } from 'react-router-dom';
import { GiSoccerBall } from 'react-icons/gi';
import { TbSoccerField } from 'react-icons/tb';
import { HiPencil } from 'react-icons/hi';
import User from './User';
import Button from '../shared/Button';
import { useAuthContext } from '../context/AuthContext';
import CartStatus from './CartStatus';

export default function Navbar() {
  const { user, login, logout } = useAuthContext();

  return (
    <header className='flex justify-between border-b border-gray-300 py-4'>
      <Link to='/' className='flex items-center text-3xl text-brand'>
        <h1 className='ml-1 tracking-tighter'>LINEUP</h1>
      </Link>
      <nav className='flex items-center gap-4 font-semibold'>
        <Link to='/products' className='hover:text-brand'>
          Products
        </Link>
        {user && (
          <Link to='/cart'>
            <CartStatus />
          </Link>
        )}
        {user && user.isAdmin && (
          <Link to='/products/new' className='text-2xl'>
            <HiPencil className='hover:text-brand' />
          </Link>
        )}
        {user && (
          <User photoURL={user.photoURL} displayName={user.displayName} />
        )}
        {!user ? (
          <Button text={'Login'} onClick={login} />
        ) : (
          <>
            <Button text={'Logout'} onClick={logout} />
          </>
        )}
      </nav>
    </header>
  );
}
