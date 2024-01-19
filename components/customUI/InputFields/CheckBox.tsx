import { useFormContext } from "react-hook-form";

import { cn } from "../../ui";

export const CheckBox = ({ label, name }: { label: string; name: string }) => {
  const { register, setValue, watch } = useFormContext();

  const checked = watch(name);

  const toggleCheck = () => {
    setValue(name, !checked);
  };

  return (
    <div className="flex gap-4">
      <div className="text-2xl">{label}</div>
      <div
        className={cn(
          `w-18 m-1.5 inline-block cursor-pointer border-2 border-main px-2.5 shadow-xxs`,
          checked ? "bg-main text-white" : "bg-white text-main",
        )}
        onClick={toggleCheck}
      >
        <div className={cn(checked && "rotate-45", "text-3xl ")}>+</div>
        <input
          type="checkbox"
          {...register(name)}
          checked={checked}
          className="hidden"
          onChange={toggleCheck}
        />
      </div>
    </div>
  );
};
