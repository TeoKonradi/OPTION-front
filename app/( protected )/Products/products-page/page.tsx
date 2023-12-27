"use client"
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { RootState } from '../../../../store/rootReducer';
import { useDeleteProduct, useProducts } from '../../../../lib/api';
import { OptionsBarEl } from '../../../../lib/consts';
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

const ProductsPage: React.FC = () => {
  const dispatch = useDispatch();
  const {
    data: productsData,
    isLoading: productsLoading,
    isError: productsError,
    refetch,
  } = useProducts();
  const { isSuccess: deleteSuccess, mutate } = useDeleteProduct();

  const itemsFromStore = useSelector((state: RootState) => state.itemsList);
  const optionsBarState = useSelector((state: RootState) => state.optionsBar);

  const optionsParams: OptionsBarEl[] = [
    {
      title: 'Add',
      value: 'link',
      link: '/products/create',
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
    if (productsData) {
      const productsWithSelection = productsData.items.map((product: any) => ({
        ...product,
        id: product.ID,
        selected: false,
      }));
      dispatch(initializeItems4List(productsWithSelection));
      dispatch(initializeItemsOptionBar(optionsParams));
    }
  }, [productsData, dispatch]);

  useEffect(() => {
    if (optionsBarState.deletePressed) {
      const selectedBrands = itemsFromStore.filter(
        (item: any) => item.selected,
      );

      Promise.all(
        selectedBrands.map((product) => {
          if (product.id !== undefined) {
            return mutate(product.id);
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

  if (productsLoading) {
    return <Loading />;
  }

  if (productsError || !productsData) {
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
export default ProductsPage;
