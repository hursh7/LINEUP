import React from 'react';

type Props = {
  text: string;
  disabled?: boolean;
  colorCode: string;
  onClick?: () => void;
};

export default function Button({ text, disabled, onClick, colorCode }: Props) {
  return (
    <button
      className={`${colorCode} text-white py-4 px-12 rounded-sm hover:brightness-125`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
