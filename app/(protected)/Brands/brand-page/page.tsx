"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";

import {
  ErrorEmptyStatus,
  ErrorLoadingData,
  Loading,
} from "../../../../components/customUI/Errors&Messages/Error&otherStuff";
import { useCurrentBrand } from "../../../../lib/api";
import { initializeItemsOptionBar } from "../../../../store/OptionsBarSlice";

const BrandPage: React.FC = () => {
  const dispatch = useDispatch();
  const { id } = useParams<Params>();

  if (!id) {
    return <ErrorEmptyStatus title={"Brand ID is missing"} />;
  }

  const { data, isError, isLoading } = useCurrentBrand(id);

  const optionsParams = [
    {
      link: "/brands/create",
      title: "Add",
      value: "link",
    },
    {
      link: "/brands/list",
      title: "List",
      value: "link",
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
    <div className="flex w-full flex-col gap-3 pb-4 pr-6 text-4xl">
      <div className="">Current ID - {id}</div>
      <div className="">Brand Name - {data.name}</div>
      <div className="">Brand Name - {data.tag}</div>
      <div className="">
        <img alt="pic" src={data.picture} />
      </div>
    </div>
  );
};

export default BrandPage;
