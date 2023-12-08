"use client"

import { useDispatch } from 'react-redux';
import { useCurrentBrand } from '../../../../{ lib }/( api )';
import { useEffect } from 'react';
import { initializeItemsOptionBar } from '../../../../store/OptionsBarSlice';
import {
  ErrorEmptyStatus,
  ErrorLoadingData,
  Loading,
} from '../../../../components/customUI/Errors&Messages/Error&otherStuff';

const BrandPage: React.FC = () => {
  const dispatch = useDispatch();
  const { id } = useParams<Params>();

  if (!id) {
    return <ErrorEmptyStatus title={'Brand ID is missing'} />;
  }

  const { data, isLoading, isError } = useCurrentBrand(id);

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

  if (isLoading) {
    return <Loading />;
  }

  if (isError || !data) {
    return <ErrorLoadingData />;
  }

  return (
    <div className="w-full flex flex-col gap-3 pb-4 pr-6 text-4xl">
      <div className="">Current ID - {id}</div>
      <div className="">Brand Name - {data.name}</div>
      <div className="">Brand Name - {data.tag}</div>
      <div className="">
        <img src={data.picture} alt="pic" />
      </div>
    </div>
  );
};

export default BrandPage;
