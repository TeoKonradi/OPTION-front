import { useFormContext } from "react-hook-form";
import { FormControl, FormField, FormItem, FormMessage } from "../../ui/form";
import { FieldProps } from ".";
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
        <FormItem className="field-with-autofill flex w-full flex-col shadow-xs border-2 border-main items-center justify-center bg-dark-800 px-5 py-1">
          <FormControl>
            <Textarea
              {...props}
              onInput={adjustHeight}
              className="border-none px-0 placeholder:text-lg text-xl placeholder:text-dark-200 focus:caret-main py-0 resize-none overflow-hidden"
              disabled={isLoading || disabled}
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
