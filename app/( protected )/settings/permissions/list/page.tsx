"use client"
import { useDispatch } from 'react-redux';
import {
  ErrorEmptyStatus,
  Loading,
} from '../../../../../components/customUI/Errors&Messages/Error&otherStuff';
import { ListContainer2 } from '../../../../../components/customUI/ListItem2';

import { RootState } from '../../../../../store/rootReducer';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { usePermissions } from '../../../../../{ lib }/( api )';
import { initializeItems4List } from '../../../../../store/itemsListSlice';
import { initializeItemsOptionBar } from '../../../../../store/OptionsBarSlice';
import { OptionsBarEl } from '../../../../../{ lib }/consts';

const PermissionsPage = () => {
  const dispatch = useDispatch();
  const { data, isLoading, isError } = usePermissions();
  const itemsFromStore = useSelector((state: RootState) => state.itemsList);

  const optionsParams: OptionsBarEl[] = [
    {
      title: 'chng',
      value: 'chng',
    },
  ];

  useEffect(() => {
    dispatch(initializeItemsOptionBar(optionsParams));
  }, [dispatch]);

  useEffect(() => {
    if (data) {
      const brandsWithSelection = data.map((permission) => ({
        ...permission,
        selected: false,
      }));
      dispatch(initializeItems4List(brandsWithSelection));
    }
  }, [data, dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  if (isError || !data) {
    return <ErrorEmptyStatus title={'Permissions list is missing'} />;
  }

  return (
    <div className="w-full">
      <ListContainer2
        items={itemsFromStore}
        toggleStatus={false}
        clickStatus={false}
      />
    </div>
  );
};

export default PermissionsPage;
