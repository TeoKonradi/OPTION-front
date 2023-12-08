"use client"
import { Button } from '../../../../components/ui/button';
import { useBrands } from '../../../../{ lib }/( api )';
import { useEffect } from 'react';
import { initializeItemsOptionBar } from '../../../../store/OptionsBarSlice';
import { useDispatch } from 'react-redux';


const BrandsMainPage = () => {
  const { data, isLoading } = useBrands();
  const dispatch = useDispatch();

  const optionsParams = [
    {
      title: 'Add',
      value: 'link',
      link: '/brands/create',
    },
    {
      title: 'List',
      value: 'link',
      link: '/brands/list',
    },
  ];

  useEffect(() => {
    dispatch(initializeItemsOptionBar(optionsParams));
  }, [dispatch]);
  console.log(data, isLoading);

  return (
    <div className="w-full grid gap-8">
      <div className="text-4xl">Brands Page</div>
      <div className="flex gap-10">
        <div className="w-64 flex flex-col gap-3">
          <div className="text-3xl">Options:</div>
          <div className="flex flex-col gap-4">
            <Button size={'sm'} variant={'default'} asChild>
              <Link href={'/brands/list'}>Brands List</Link>
            </Button>
            <Button size={'sm'} variant={'default'} asChild>
              <Link href={'/brands/create'}>Create Brand</Link>
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-3xl">Stats:</div>
          <div className="grid gap-1">
            <div className="text-2xl">
              Brands Quantity - {data?.total ?? 'error'}
            </div>
            {/* <div className="text-2xl">All Avaliable Brands - {9}</div> */}
            {/* <div className="text-2xl">Active Positions - {9}</div> */}
            {/* <div className="text-2xl">Archived Positions - {0}</div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandsMainPage;
