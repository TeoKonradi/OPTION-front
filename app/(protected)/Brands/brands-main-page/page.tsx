"use client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Button } from "../../../../components/ui/button";
import { useBrands } from "../../../../lib/api";
import { initializeItemsOptionBar } from "../../../../store/OptionsBarSlice";

const BrandsMainPage = () => {
  const { data, isLoading } = useBrands();
  const dispatch = useDispatch();

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
  console.log(data, isLoading);

  return (
    <div className="grid w-full gap-8">
      <div className="text-4xl">Brands Page</div>
      <div className="flex gap-10">
        <div className="flex w-64 flex-col gap-3">
          <div className="text-3xl">Options:</div>
          <div className="flex flex-col gap-4">
            <Button asChild size={"sm"} variant={"default"}>
              <Link href={"/brands/list"}>Brands List</Link>
            </Button>
            <Button asChild size={"sm"} variant={"default"}>
              <Link href={"/brands/create"}>Create Brand</Link>
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-3xl">Stats:</div>
          <div className="grid gap-1">
            <div className="text-2xl">Brands Quantity - {data?.total ?? "error"}</div>
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
