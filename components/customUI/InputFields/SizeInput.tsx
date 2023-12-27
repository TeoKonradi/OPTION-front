import { useFieldArray, useFormContext } from "react-hook-form";
import { FormControl, FormField, FormItem, FormMessage } from "../../ui/form";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import { useEffect } from "react";
import { ProductSize } from "../../../lib/api";

export const SizeInputs = ({ ...props }) => {
  const isLoading = props.isLoading;
  const disabled = props.disabled;

  type ProductForm = {
    size: ProductSize[];
  };

  const form = useFormContext<ProductForm>();

  const {
    fields: fieldsSize,
    append: appendSize,
    remove: removeSize,
  } = useFieldArray({
    control: form.control,
    name: "size",
  });

  useEffect(() => {
    if (fieldsSize.length === 0) {
      appendSize({ size: "", available_now: 0 });
    }
  }, [fieldsSize, appendSize]);

  // const incrementValue = (index: number) => {
  //   const newValue = form.getValues(`size.${index}.available_now`) + 1;
  //   form.setValue(`size.${index}.available_now`, newValue);
  // };

  // const decrementValue = (index: number) => {
  //   const newValue = form.getValues(`size.${index}.available_now`) - 1;
  //   form.setValue(`size.${index}.available_now`, newValue);
  // };

  return (
    <div className="grid gap-3">
      {fieldsSize.map((field, index) => (
        <div
          key={field.id}
          className="flex gap-5 w-full justify-between"
        >
          <FormField
            render={({ field: sizeField }) => (
              <FormItem className="field-with-autofill flex w-1/2 flex-col shadow-xs border-2 border-main items-center justify-center bg-dark-800 px-5 py-1">
                <FormControl>
                  <Input
                    className="border-none px-0 placeholder:text-lg text-xl placeholder:text-dark-200 focus:caret-main py-0"
                    disabled={isLoading || disabled}
                    {...sizeField}
                    {...props}
                    placeholder="Size"
                    type="text"
                  />
                </FormControl>
                <FormMessage className="w-full text-start text-sm leading-none text-red-700" />
              </FormItem>
            )}
            control={form.control}
            name={`size.${index}.size`}
          />

          <FormField
            render={({ field: avaliable_nowField }) => (
              // <div className="flex w-84 justify-between items-center">
              //   <Button type="button" onClick={() => decrementValue(index)}>
              //     -
              //   </Button>
              <FormItem className="field-with-autofill flex w-1/2 flex-col shadow-xs border-2 border-main items-center justify-center bg-dark-800 px-5 py-1">
                <FormControl>
                  <Input
                    className="border-none px-0 placeholder:text-lg text-xl placeholder:text-dark-200 focus:caret-main py-0"
                    disabled={isLoading || disabled}
                    {...avaliable_nowField}
                    {...props}
                    placeholder="Avaliable Now"
                    type="number"
                  />
                </FormControl>
                <FormMessage className="w-full text-start text-sm leading-none text-red-700" />
              </FormItem>
              //   <Button type="button" onClick={() => incrementValue(index)}>
              //     +
              //   </Button>
              // </div>
            )}
            control={form.control}
            name={`size.${index}.available_now`}
          />

          <Button
            type="button"
            onClick={() => removeSize(index)}
          >
            Remove
          </Button>
        </div>
      ))}

      <Button
        type="button"
        onClick={() => appendSize({ size: "", available_now: 0 })}
      >
        Add Size
      </Button>
    </div>
  );
};
