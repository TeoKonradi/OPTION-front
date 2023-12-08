// import { createNewItemFormArrayI } from ".";
// import { useFieldArray, useFormContext } from "react-hook-form";
// import { FormControl, FormField, FormItem, FormMessage } from "../../ui/form";
// import { Input } from "../../ui/input";
// import { Button } from "../../ui/button";
// import { Label } from "../../ui/label";

// const ImageInput = ({ ...props }) => {
//   const isLoading = props.isLoading;
//   const disabled = props.disabled;
//   const form = useFormContext<createNewItemFormArrayI>();
//   const {
//     fields: fieldsImage,
//     append: appendImage,
//     remove: removeImage,
//   } = useFieldArray({
//     control: form.control,
//     name: "images",
//   });
//   return (
//     <div className="">
//       <div className="grid gap-3">
//         {fieldsImage.map((field, index) => (
//           <div key={field.id} className="flex gap-5 w-full justify-between">
//             <FormField
//               render={({ field: sizeField }) => (
//                 <FormItem className="field-with-autofill flex w-1/2 flex-col shadow-xs border-2 border-main items-center justify-center bg-dark-800 px-5 py-1">
//                   <FormControl>
//                     <Label />
//                     <Input
//                       className="border-none px-0 placeholder:text-lg text-xl placeholder:text-dark-200 focus:caret-main py-0"
//                       disabled={isLoading || disabled}
//                       type="file"
//                       {...sizeField}
//                       {...props}
//                       placeholder="Size"
//                     />
//                   </FormControl>
//                   <FormMessage className="w-full text-start text-sm leading-none text-red-700" />
//                 </FormItem>
//               )}
//               control={form.control}
//               name={`images.${index}.img`}
//             />

//             <Button type="button" onClick={() => removeImage(index)}>
//               Remove
//             </Button>
//           </div>
//         ))}

//         <Button type="button" onClick={() => appendImage({ img: "" })}>
//           +
//         </Button>
//       </div>
//     </div>
//   );
// };

// const ImageInputZod = ({ ...props }) => {
//   const isLoading = props.isLoading;
//   const disabled = props.disabled;
//   const form = useFormContext<createNewItemFormArrayI>();
//   const {
//     fields: fieldsImage,
//     append: appendImage,
//     remove: removeImage,
//   } = useFieldArray({
//     control: form.control,
//     name: "images",
//   });
//   return (
//     <div className="">
//       <div className="grid gap-3">
//         {fieldsImage.map((field, index) => (
//           <div key={field.id} className="flex gap-5 w-full justify-between">
//             <FormField
//               render={({ field: sizeField }) => (
//                 <FormItem className="field-with-autofill flex w-1/2 flex-col shadow-xs border-2 border-main items-center justify-center bg-dark-800 px-5 py-1">
//                   <FormControl>
//                     <Label />
//                     <Input
//                       className="border-none px-0 placeholder:text-lg text-xl placeholder:text-dark-200 focus:caret-main py-0"
//                       disabled={isLoading || disabled}
//                       type="file"
//                       {...sizeField}
//                       {...props}
//                       placeholder="Size"
//                     />
//                   </FormControl>
//                   <FormMessage className="w-full text-start text-sm leading-none text-red-700" />
//                 </FormItem>
//               )}
//               control={form.control}
//               name={`images.${index}.img`}
//             />

//             <Button type="button" onClick={() => removeImage(index)}>
//               Remove
//             </Button>
//           </div>
//         ))}

//         <Button type="button" onClick={() => appendImage({ img: "" })}>
//           +
//         </Button>
//       </div>
//     </div>
//   );
// };
// export { ImageInput, ImageInputZod };
