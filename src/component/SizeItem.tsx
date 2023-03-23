import React from 'react';

type IOption = {
  option: string;
};

export default function SizeItem({ option }: IOption) {
  return (
    <li className='w-8 h-8 rounded-lg flex items-center justify-center bg-brand text-white text-sm'>
      {option}
    </li>
  );
}
