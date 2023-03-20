import React from 'react';

type Props = {
  text: string;
  disabled?: boolean;
  onClick?: () => void;
};

export default function Button({ text, disabled, onClick }: Props) {
  return (
    <button
      className='bg-brand text-white py-2 px-4 rounded-sm hover:brightness-110'
      onClick={onClick}
    >
      {text}
    </button>
  );
}
