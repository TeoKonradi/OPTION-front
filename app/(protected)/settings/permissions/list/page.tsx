"use client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import {
  ErrorEmptyStatus,
  Loading,
} from "../../../../../components/customUI/Errors&Messages/Error&otherStuff";
import { ListContainer2 } from "../../../../../components/customUI/ListItem2";
import { usePermissions } from "../../../../../lib/api";
import { OptionsBarEl } from "../../../../../lib/consts";
import { initializeItemsOptionBar } from "../../../../../store/OptionsBarSlice";
import { initializeItems4List } from "../../../../../store/itemsListSlice";
import { RootState } from "../../../../../store/rootReducer";

const PermissionsPage = () => {
  const dispatch = useDispatch();
  const { data, isError, isLoading } = usePermissions();
  const itemsFromStore = useSelector((state: RootState) => state.itemsList);

  const optionsParams: OptionsBarEl[] = [
    {
      title: "chng",
      value: "chng",
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
    return <ErrorEmptyStatus title={"Permissions list is missing"} />;
  }

  return (
    <div className="w-full">
      <ListContainer2 clickStatus={false} items={itemsFromStore} toggleStatus={false} />
    </div>
  );
};

export default PermissionsPage;
