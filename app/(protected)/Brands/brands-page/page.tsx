"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  ErrorEmptyStatus,
  Loading,
} from "../../../../components/customUI/Errors&Messages/Error&otherStuff";
import { ListContainer2 } from "../../../../components/customUI/ListItem2";
import { useBrands, useDeleteBrand } from "../../../../lib/api";
import { OptionsBarEl } from "../../../../lib/consts";
import {
  initializeItemsOptionBar,
  resetDeletePress,
} from "../../../../store/OptionsBarSlice";
import { initializeItems4List } from "../../../../store/itemsListSlice";
import { RootState } from "../../../../store/rootReducer";

const BrandsPage: React.FC = () => {
  const dispatch = useDispatch();
  const {
    data: brandsData,
    isError: brandsError,
    isLoading: brandsLoading,
    refetch,
  } = useBrands();
  const { isSuccess: deleteSuccess, mutate } = useDeleteBrand();

  const itemsFromStore = useSelector((state: RootState) => state.itemsList);
  const optionsBarState = useSelector((state: RootState) => state.optionsBar);

  const optionsParams: OptionsBarEl[] = [
    {
      link: "/brands/create",
      title: "Add",
      value: "link",
    },
    {
      title: "Delete",
      value: "delete",
    },
    {
      title: "Reset",
      value: "reset",
    },
    {
      title: "chng",
      value: "chng",
    },
  ];

  useEffect(() => {
    if (brandsData) {
      const brandsWithSelection = brandsData.items.map((brand) => ({
        ...brand,
        id: brand.ID,
        selected: false,
      }));
      dispatch(initializeItems4List(brandsWithSelection));
      dispatch(initializeItemsOptionBar(optionsParams));
    }
  }, [brandsData, dispatch]);

  useEffect(() => {
    if (optionsBarState.deletePressed) {
      const selectedBrands = itemsFromStore.filter((item: any) => item.selected);

      Promise.all(
        selectedBrands.map((brand: any) => {
          if (brand.id !== undefined) {
            return mutate(brand.id);
          }
        }),
      ).then(() => {
        refetch();
      });

      dispatch(resetDeletePress());
    }
  }, [
    optionsBarState.deletePressed,
    itemsFromStore,
    dispatch,
    mutate,
    deleteSuccess,
    refetch,
  ]);

  if (brandsLoading) {
    return <Loading />;
  }

  if (brandsError || !brandsData) {
    return <ErrorEmptyStatus title={"Brands list is missing"} />;
  }

  return (
    <div className="w-full">
      <ListContainer2 clickStatus={true} items={itemsFromStore} toggleStatus={true} />
    </div>
  );
};

export default BrandsPage;
