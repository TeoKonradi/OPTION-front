import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { RootState } from "../store/rootReducer";
import { handleDeletePress } from "../store/OptionsBarSlice";
import { resetSelectedItems } from "../store/itemsListSlice";
import { OptionsBarEl } from "../{ lib }/consts";
import { toggleScrollState } from "../store/ToogleScrollSlice";

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
        className="py-1 px-2 text-xl border-2 cursor-pointer select-none border-main active:text-white active:bg-main"
        onClick={() => handleOptionClick({ props })}
      >
        <h3 className="">{props.title}</h3>
      </div>
    );
  };

  return (
    <div className="flex items-center p-3 gap-4">
      {options.map((item: OptionsBarEl, index: number) => (
        <OptionElement
          props={item}
          key={index}
        />
      ))}
    </div>
  );
};

export default OptionsBar;
