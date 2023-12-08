"use client"

import React, { useEffect } from 'react';
import { useCurrentProduct } from '../../../../{ lib }/( api )';
import { initializeItemsOptionBar } from '../../../../store/OptionsBarSlice';
import {
  ErrorEmptyStatus,
  ErrorLoadingData,
  Loading,
} from '../../../../components/customUI/Errors&Messages/Error&otherStuff';
import { useDispatch } from 'react-redux';

type Params = {
  id: string;
};

const ProductPage: React.FC = () => {
  const dispatch = useDispatch();
  const { id } = useParams<Params>();

  if (!id) {
    return <ErrorEmptyStatus title={'Brand ID is missing'} />;
  }

  const { data, isLoading, isError } = useCurrentProduct(id);

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

  if (isLoading) {
    return <Loading />;
  }

  if (isError || !data) {
    return <ErrorLoadingData />;
  }

  return (
    <div className="flex flex-col gap-3 pb-4 pr-6 text-4xl">
      <div className="text-4xl">Current ID - {id}</div>
      <div className="text-4xl">Header - {data.header}</div>
      <div className="text-4xl">Product Tag - {data.product_tag}</div>
      <div className="text-4xl">Description - {data.description}</div>
      <div className="text-4xl">Price - {data.price}</div>
      <div className="text-4xl">Product Tag - {data.product_tag}</div>
      <div className="text-4xl">Show in Market - {data.show_in_market}</div>
      <div className="text-4xl">Available - {data.available}</div>
      <div className="text-4xl">
        Sizes:
        {data.size.map((item, index) => {
          return (
            <div key={index} className="text-4xl">
              {item.size} - {item.available_now}
            </div>
          );
        })}
      </div>
      <div className="text-4xl">
        Pictures:
        <div className="flex flex-col gap-4">
          {data.picture.map((img, index) => {
            return (
              <div className="text-4xl shadow-sm" key={index}>
                <img src={img} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
