import React from "react";
import { useDispatch } from "react-redux";
import { Check } from "lucide-react";
import { Separator } from "../ui/separator";
import { useRouter } from "next/router";
import { cn } from "../ui";

import { toggleItemSelection } from "../../store/itemsListSlice";
import { nanoid } from "@reduxjs/toolkit";
import { usePathname } from "next/navigation";

type GenericObject = {
  [key: string]: any;
  selected: boolean;
  id?: string | number;
  ID?: string | number;
};

interface OptionsStatus {
  toggleStatus: boolean;
  clickStatus: boolean;
}

interface ListItemProps {
  item: GenericObject;
}

const ListItem2: React.FC<ListItemProps & OptionsStatus> = ({
  item,
  toggleStatus,
  clickStatus,
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
        "flex w-full shadow-lg h-full items-center justify-start border-2 border-main min-h-[48px]"
      )}
    >
      <div
        className={cn(
          toggleStatus &&
            "border-r-2 border-main h-full flex justify-center items-center w-12 cursor-pointer",
          item.selected && "bg-main"
        )}
        onClick={handleToggle}
      >
        {toggleStatus && <Check color={item.selected ? "white" : "black"} />}
      </div>
      <div
        onClick={catchClick}
        className={cn(
          "flex items-center gap-8 pl-6 w-full text-2xl",
          clickStatus && "cursor-pointer"
        )}
      >
        {Object.entries(item)
          .filter(([key]) => key !== "id" && key !== "selected")
          .slice(0, toggleStatus ? 4 : 5)
          .map(([key, value], index, array) => (
            <React.Fragment key={key}>
              <div className="">{String(value).slice(0, 20)}</div>
              {index !== array.length - 1 && (
                <Separator
                  className="w-[2px] bg-main h-6"
                  orientation="vertical"
                />
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
  items,
  toggleStatus,
  clickStatus,
}) => {
  return (
    <div className="flex flex-col gap-3 pb-4 pr-6">
      {items.map((item, index) => (
        <ListItem2
          key={item.id || index}
          item={item}
          toggleStatus={toggleStatus}
          clickStatus={clickStatus}
        />
      ))}
    </div>
  );
};

export { ListItem2, ListContainer2 };
