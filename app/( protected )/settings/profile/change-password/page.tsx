// "use client"
// import { zodResolver } from "@hookform/resolvers/zod";
// import { ReactNode } from "react";
// import { useForm, useFormContext } from "react-hook-form";
// import { z } from "zod";

// import { LoadingButton } from "../../components/ui/button";
// import {
//   Dialog,
//   DialogContent,
//   DialogFooter,
//   DialogTitle,
// } from "../../components/ui/dialog";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "../../components/ui/form";
// import { Input, InputProps } from "../../components/ui/input";
// import { Separator as SeparatorComponent } from "../../components/ui/separator";

// import { passwordRegex } from "../../lib/utils";
// import { useUpdatePassword } from "../../lib/api";

// const Separator = () => (
//   <SeparatorComponent className="-mx-5 w-[calc(100%+2.5rem)] bg-[#222326]" />
// );

// const formSchema = z
//   .object({
//     oldPassword: z.string(),
//     password: z
//       .string()
//       .min(8, "Минимальная длина пароля 8 символов")
//       .regex(
//         passwordRegex,
//         "Проверьте, что пароль содержит строчные/заглавные буквы и цифры",
//       ),
//     passwordCheck: z.string(),
//   })
//   .superRefine((v, ctx) => {
//     if (v.password !== v.passwordCheck) {
//       ctx.addIssue({
//         code: z.ZodIssueCode.custom,
//         message: "Пароли не совпадают",
//         path: ["passwordCheck"],
//       });
//     }
//   });

// type FormFields = z.infer<typeof formSchema>;

// const InputField = ({
//   label,
//   name,
//   ...props
// }: { label: ReactNode; name: keyof FormFields } & InputProps) => {
//   const { control } = useFormContext<FormFields>();
//   return (
//     <FormField
//       render={({ field }) => (
//         <FormItem className="flex flex-col space-y-0">
//           <FormLabel className="text-peach">{label}</FormLabel>
//           <FormControl>
//             <Input
//               className="border-0 px-0 text-lg placeholder:text-dark-200 focus:caret-peach"
//               type="password"
//               {...props}
//               {...field}
//             />
//           </FormControl>
//           <FormMessage className="text-sm text-red-700" />
//         </FormItem>
//       )}
//       control={control}
//       name={name}
//     />
//   );
// };

// const PasswordChanging = () => {
//   const isClient = useIsClient();
//   const router = useRouter();
//   const form = useForm<FormFields>({
//     defaultValues: {
//       oldPassword: "",
//       password: "",
//       passwordCheck: "",
//     },
//     resolver: zodResolver(formSchema),
//   });

//   const { isLoading, mutateAsync } = useUpdatePassword();

//   const handleSubmit = form.handleSubmit(async (data) => {
//     try {
//       await mutateAsync(data);
//       router.push("/profile/settings/password-changed");
//     } catch {
//       form.setError("oldPassword", { message: "Введённый пароль неверен" });
//     }
//   });

//   return (
//     <Dialog onOpenChange={() => router.back()} open={isClient}>
//       <Form {...form}>
//         <DialogContent>
//           <DialogTitle className="text-xl font-semibold">Изменить пароль</DialogTitle>
//           <form className="space-y-4" onSubmit={handleSubmit}>
//             <div className="flex flex-col gap-3 rounded-2xl bg-dark-700 p-5 text-left">
//               <InputField
//                 autoComplete="current-password"
//                 label="Текущий пароль"
//                 name="oldPassword"
//                 placeholder="Введите текущий пароль"
//               />
//               <Separator />
//               <InputField
//                 autoComplete="new-password"
//                 label="Новый пароль"
//                 name="password"
//                 placeholder="Введите новый пароль"
//               />
//               <Separator />
//               <InputField
//                 autoComplete="new-password"
//                 label="Новый пароль ещё раз"
//                 name="passwordCheck"
//                 placeholder="Повторите новый пароль"
//               />
//             </div>
//             <DialogFooter>
//               <LoadingButton isLoading={isLoading} type="submit">
//                 Обновить пароль
//               </LoadingButton>
//             </DialogFooter>
//           </form>
//         </DialogContent>
//       </Form>
//     </Dialog>
//   );
// };

// export default PasswordChanging;

const ChangePassword = () => {
  return (
    <div className="">
      <div className="">
        <div className="text-4xl">ChangePassword</div>
      </div>
    </div>
  );
};

export default ChangePassword;
