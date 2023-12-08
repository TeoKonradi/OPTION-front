import { useFormContext } from 'react-hook-form';
import { FormControl, FormField, FormItem, FormMessage } from '../../ui/form';
import { FieldProps } from '.';
import { Input } from '../../ui/input';

export const InputField: React.FC<FieldProps> = ({
  disabled,
  isLoading,
  name,
  required,
  ...props
}) => {
  const form = useFormContext();
  return (
    <FormField
      render={({ field }) => (
        <FormItem className="field-with-autofill flex w-full flex-col shadow-xs border-2 border-main items-center justify-center bg-dark-800 px-5 py-1">
          <FormControl>
            <Input
              className="border-none px-0 placeholder:text-lg text-xl placeholder:text-dark-200 focus:caret-main py-0 no-number-spinners"
              disabled={isLoading || disabled}
              required={required}
              onFocus={(e) =>
                e.target.addEventListener(
                  'wheel',
                  function (e) {
                    e.preventDefault();
                  },
                  { passive: false },
                )
              }
              {...field}
              {...props}
            />
          </FormControl>
          <FormMessage className="w-full text-start text-sm leading-none text-red-700" />
        </FormItem>
      )}
      control={form.control}
      name={name}
    />
  );
};
