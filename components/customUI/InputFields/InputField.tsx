import { useFormContext } from "react-hook-form";

import { FieldProps } from ".";
import { FormControl, FormField, FormItem, FormMessage } from "../../ui/form";
import { Input } from "../../ui/input";

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
        <FormItem className="field-with-autofill bg-dark-800 flex w-full flex-col items-center justify-center border-2 border-main px-5 py-1 shadow-xs">
          <FormControl>
            <Input
              onFocus={(e) =>
                e.target.addEventListener(
                  "wheel",
                  function (e) {
                    e.preventDefault();
                  },
                  { passive: false },
                )
              }
              className="placeholder:text-dark-200 no-number-spinners border-none px-0 py-0 text-xl placeholder:text-lg focus:caret-main"
              disabled={isLoading || disabled}
              required={required}
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
