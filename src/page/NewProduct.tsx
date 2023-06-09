import { useMutation, useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react';
import { addNewProduct } from '../api/firebase';
import { uploadImage } from '../api/uploader.js';
import useProducts from '../hooks/useProducts';
import Button from '../shared/Button';

type ProductInput = {
  target: { name: string; value: string; files: any };
};

export default function NewProduct() {
  const [product, setProduct] = useState<any>({});
  const [file, setFile] = useState();
  const [isUploading, setIsUploading] = useState(false);
  const [success, setSuccess] = useState<string | null>();
  const { addProduct } = useProducts();

  const handleChange = (e: ProductInput) => {
    const { name, value, files } = e.target;
    if (name === 'file') {
      setFile(files && files[0]);
      return;
    }
    setProduct((product: any) => ({ ...product, [name]: value }));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsUploading(true);
    uploadImage(file) //
      .then(url => {
        addProduct.mutate(
          { product, url },
          {
            onSuccess: () => {
              setSuccess('제품이 성공적으로 추가되었습니다.');
              setTimeout(() => {
                setSuccess(null);
              }, 4000);
            },
          }
        );
      })
      .finally(() => setIsUploading(false));
  };

  return (
    <section className='w-full text-center max-w-screen-2xl mx-auto'>
      <h2 className='text-2xl font-bold my-4'>새로운 제품 등록</h2>
      {success && <p className='my-2'>✅ {success}</p>}
      {file && (
        <img
          className='w-96 mx-auto mb-2'
          src={URL.createObjectURL(file)}
          alt='local file'
        />
      )}
      <form className='flex flex-col px-12' onSubmit={handleSubmit}>
        <input
          type='file'
          accept='image/*'
          name='file'
          required
          onChange={handleChange}
        />
        <input
          type='text'
          name='title'
          value={product.title ?? ''}
          placeholder='제품명'
          required
          onChange={handleChange}
        />
        <input
          type='number'
          name='price'
          value={product.price ?? ''}
          placeholder='가격'
          required
          onChange={handleChange}
        />
        <input
          type='text'
          name='category'
          value={product.category ?? ''}
          placeholder='카테고리'
          required
          onChange={handleChange}
        />
        <input
          type='text'
          name='description'
          value={product.description ?? ''}
          placeholder='제품 설명'
          required
          onChange={handleChange}
        />
        <input
          type='text'
          name='options'
          value={product.options ?? ''}
          placeholder='옵션들(콤마(,)로 구분)'
          required
          onChange={handleChange}
        />
        <div className='mt-2'></div>
        <Button
          text={isUploading ? '업로드중...' : '제품 등록하기'}
          colorCode={'bg-brand'}
          disabled={isUploading}
        />
      </form>
    </section>
  );
}
