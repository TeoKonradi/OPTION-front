import { nanoid } from "@reduxjs/toolkit";
import { Check } from "lucide-react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";

import { toggleItemSelection } from "../../store/itemsListSlice";
import { cn } from "../ui";
import { Separator } from "../ui/separator";

type GenericObject = {
  [key: string]: any;
  ID?: number | string;
  id?: number | string;
  selected: boolean;
};

interface OptionsStatus {
  clickStatus: boolean;
  toggleStatus: boolean;
}

interface ListItemProps {
  item: GenericObject;
}

const ListItem2: React.FC<ListItemProps & OptionsStatus> = ({
  clickStatus,
  item,
  toggleStatus,
}) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const pathName = usePathname();

  const getItemId = () => {
    return item.id || item.ID || nanoid();
  };

  const handleToggle = () => {
    const itemId = getItemId();
    dispatch(toggleItemSelection(itemId));
  };

  const catchClick = () => {
    if (clickStatus) {
      router.push(`${pathName}/${getItemId()}`);
    } else {
      console.log("click");
    }
  };

  return (
    <div
      className={cn(
        "flex h-full min-h-[48px] w-full items-center justify-start border-2 border-main shadow-lg",
      )}
    >
      <div
        className={cn(
          toggleStatus &&
            "flex h-full w-12 cursor-pointer items-center justify-center border-r-2 border-main",
          item.selected && "bg-main",
        )}
        onClick={handleToggle}
      >
        {toggleStatus && <Check color={item.selected ? "white" : "black"} />}
      </div>
      <div
        className={cn(
          "flex w-full items-center gap-8 pl-6 text-2xl",
          clickStatus && "cursor-pointer",
        )}
        onClick={catchClick}
      >
        {Object.entries(item)
          .filter(([key]) => key !== "id" && key !== "selected")
          .slice(0, toggleStatus ? 4 : 5)
          .map(([key, value], index, array) => (
            <React.Fragment key={key}>
              <div className="">{String(value).slice(0, 20)}</div>
              {index !== array.length - 1 && (
                <Separator className="h-6 w-[2px] bg-main" orientation="vertical" />
              )}
            </React.Fragment>
          ))}
      </div>
    </div>
  );
};

interface ListContainerProps {
  items: GenericObject[];
}

const ListContainer2: React.FC<ListContainerProps & OptionsStatus> = ({
  clickStatus,
  items,
  toggleStatus,
}) => {
  return (
    <div className="flex flex-col gap-3 pb-4 pr-6">
      {items.map((item, index) => (
        <ListItem2
          clickStatus={clickStatus}
          item={item}
          key={item.id || index}
          toggleStatus={toggleStatus}
        />
      ))}
    </div>
  );
};

export { ListContainer2, ListItem2 };
