import { useEffect } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";

import { ProductSize } from "../../../lib/api";
import { Button } from "../../ui/button";
import { FormControl, FormField, FormItem, FormMessage } from "../../ui/form";
import { Input } from "../../ui/input";

export const SizeInputs = ({ ...props }) => {
  const isLoading = props.isLoading;
  const disabled = props.disabled;

  type ProductForm = {
    size: ProductSize[];
  };

  const form = useFormContext<ProductForm>();

  const {
    append: appendSize,
    fields: fieldsSize,
    remove: removeSize,
  } = useFieldArray({
    control: form.control,
    name: "size",
  });

  useEffect(() => {
    if (fieldsSize.length === 0) {
      appendSize({ available_now: 0, size: "" });
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
        <div className="flex w-full justify-between gap-5" key={field.id}>
          <FormField
            render={({ field: sizeField }) => (
              <FormItem className="field-with-autofill bg-dark-800 flex w-1/2 flex-col items-center justify-center border-2 border-main px-5 py-1 shadow-xs">
                <FormControl>
                  <Input
                    className="placeholder:text-dark-200 border-none px-0 py-0 text-xl placeholder:text-lg focus:caret-main"
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
              <FormItem className="field-with-autofill bg-dark-800 flex w-1/2 flex-col items-center justify-center border-2 border-main px-5 py-1 shadow-xs">
                <FormControl>
                  <Input
                    className="placeholder:text-dark-200 border-none px-0 py-0 text-xl placeholder:text-lg focus:caret-main"
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

          <Button onClick={() => removeSize(index)} type="button">
            Remove
          </Button>
        </div>
      ))}

      <Button onClick={() => appendSize({ available_now: 0, size: "" })} type="button">
        Add Size
      </Button>
    </div>
  );
};
