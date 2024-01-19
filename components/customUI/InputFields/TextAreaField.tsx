import { useFormContext } from "react-hook-form";

import { FieldProps } from ".";
import { FormControl, FormField, FormItem, FormMessage } from "../../ui/form";
import { Textarea } from "../../ui/textarea";

export const TextareaField: React.FC<FieldProps> = ({
  disabled,
  isLoading,
  name,
  ...props
}) => {
  const form = useFormContext();

  // This function adjusts the height of the event's target (the textarea)
  const adjustHeight = (event: React.FormEvent<HTMLTextAreaElement>) => {
    const textarea = event.currentTarget;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  return (
    <FormField
      render={({ field }) => (
        <FormItem className="field-with-autofill bg-dark-800 flex w-full flex-col items-center justify-center border-2 border-main px-5 py-1 shadow-xs">
          <FormControl>
            <Textarea
              {...props}
              className="placeholder:text-dark-200 resize-none overflow-hidden border-none px-0 py-0 text-xl placeholder:text-lg focus:caret-main"
              disabled={isLoading || disabled}
              onInput={adjustHeight}
              {...field}
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
