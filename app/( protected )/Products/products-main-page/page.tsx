"use client"
import Link from 'next/link';
import { Button } from '../../../../components/ui/button';
import { useProducts } from '../../../../{ lib }/( api )';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { initializeItemsOptionBar } from '../../../../store/OptionsBarSlice';

const ProductsMainPage = () => {
  const { data, isLoading } = useProducts();
  console.log(data, isLoading);
  const dispatch = useDispatch();

  const optionsParams = [
    {
      title: 'Add',
      value: 'link',
      link: '/products/create',
    },
    {
      title: 'List',
      value: 'link',
      link: '/products/list',
    },
  ];

  useEffect(() => {
    dispatch(initializeItemsOptionBar(optionsParams));
  }, [dispatch]);

  return (
    <div className="w-full grid gap-8">
      <div className="text-4xl">Products Page</div>
      <div className="flex gap-10">
        <div className="w-64 flex flex-col gap-3">
          <div className="text-3xl">Options:</div>
          <div className="flex flex-col gap-4">
            <Button size={'sm'} variant={'default'} asChild>
              <Link href={'/products/list'}>Products List</Link>
            </Button>
            <Button size={'sm'} variant={'default'} asChild>
              <Link href={'/products/create'}>Create Product</Link>
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-3xl">Stats:</div>
          <div className="grid gap-1">
            <div className="text-2xl">
              All Products Quantity - {data?.total ?? 'error'}
            </div>
            <div className="text-2xl">All Avaliable Positions - {9}</div>
            <div className="text-2xl">Active Positions - {9}</div>
            <div className="text-2xl">Archived Positions - {0}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsMainPage;
