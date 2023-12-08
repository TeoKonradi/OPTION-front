import { useFormContext } from 'react-hook-form';
import { cn } from '../../ui';

export const CheckBox = ({ name, label }: { name: string; label: string }) => {
  const { register, watch, setValue } = useFormContext();

  const checked = watch(name);

  const toggleCheck = () => {
    setValue(name, !checked);
  };

  return (
    <div className="flex gap-4">
      <div className="text-2xl">{label}</div>
      <div
        className={cn(
          `shadow-xxs w-18 cursor-pointer px-2.5 m-1.5 inline-block border-2 border-main`,
          checked ? 'bg-main text-white' : 'bg-white text-main',
        )}
        onClick={toggleCheck}
      >
        <div className={cn(checked && 'rotate-45', 'text-3xl ')}>+</div>
        <input
          type="checkbox"
          {...register(name)}
          className="hidden"
          checked={checked}
          onChange={toggleCheck}
        />
      </div>
    </div>
  );
};
