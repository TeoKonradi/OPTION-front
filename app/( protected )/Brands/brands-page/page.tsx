"use client"
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { RootState } from '../../../../store/rootReducer';
import { useBrands, useDeleteBrand } from '../../../../{ lib }/( api )';
import { OptionsBarEl } from '../../../../{ lib }/consts';
import { initializeItems4List } from '../../../../store/itemsListSlice';
import {
  initializeItemsOptionBar,
  resetDeletePress,
} from '../../../../store/OptionsBarSlice';
import {
  ErrorEmptyStatus,
  Loading,
} from '../../../../components/customUI/Errors&Messages/Error&otherStuff';
import { ListContainer2 } from '../../../../components/customUI/ListItem2';

const BrandsPage: React.FC = () => {
  const dispatch = useDispatch();
  const {
    data: brandsData,
    isLoading: brandsLoading,
    isError: brandsError,
    refetch,
  } = useBrands();
  const { isSuccess: deleteSuccess, mutate } = useDeleteBrand();

  const itemsFromStore = useSelector((state: RootState) => state.itemsList);
  const optionsBarState = useSelector((state: RootState) => state.optionsBar);

  const optionsParams: OptionsBarEl[] = [
    {
      title: 'Add',
      value: 'link',
      link: '/brands/create',
    },
    {
      title: 'Delete',
      value: 'delete',
    },
    {
      title: 'Reset',
      value: 'reset',
    },
    {
      title: 'chng',
      value: 'chng',
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
      const selectedBrands = itemsFromStore.filter(
        (item: any) => item.selected,
      );

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
    return <ErrorEmptyStatus title={'Brands list is missing'} />;
  }

  return (
    <div className="w-full">
      <ListContainer2
        items={itemsFromStore}
        toggleStatus={true}
        clickStatus={true}
      />
    </div>
  );
};

export default BrandsPage;
