import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

import { OptionsBarEl } from "../lib/consts";
import { handleDeletePress } from "../store/OptionsBarSlice";
import { toggleScrollState } from "../store/ToogleScrollSlice";
import { resetSelectedItems } from "../store/itemsListSlice";
import { RootState } from "../store/rootReducer";

const OptionsBar = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const options = useSelector((state: RootState) => state.optionsBar.items);

  const handleGoBack = () => {
    router.back();
  };

  const handleOptionClick = ({ props }: { props: OptionsBarEl }) => {
    if (props.value === "delete") {
      dispatch(handleDeletePress());
    }
    if (props.value === "reset") {
      dispatch(resetSelectedItems());
    }
    if (props.value === "add" || props.value === "link") {
      if (props.link) {
        router.push(props.link);
      }
    }
    if (props.value === "back") {
      handleGoBack();
    }
    if (props.value === "chng") {
      dispatch(toggleScrollState());
    }
  };

  const OptionElement = ({ props }: { props: OptionsBarEl }) => {
    return (
      <div
        className="cursor-pointer select-none border-2 border-main px-2 py-1 text-xl active:bg-main active:text-white"
        onClick={() => handleOptionClick({ props })}
      >
        <h3 className="">{props.title}</h3>
      </div>
    );
  };

  return (
    <div className="flex items-center gap-4 p-3">
      {options.map((item: OptionsBarEl, index: number) => (
        <OptionElement key={index} props={item} />
      ))}
    </div>
  );
};

export default OptionsBar;
