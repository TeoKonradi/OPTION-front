"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import * as z from "zod";

import { InputField } from "../../../components/customUI/InputFields/InputField";
import { LoadingButton } from "../../../components/ui/button";
import { Form } from "../../../components/ui/form";
import { useLogin } from "../../../lib/api";
import { setIsLogged } from "../../../store/LoginStatus";

interface KyError extends Error {
  response: Response;
}

const formSchema = z.object({
  password: z.string(),
  username: z.string(),
});

const Login = () => {
  const dispatch = useDispatch();
  const { error, isError, isLoading, mutateAsync } = useLogin();

  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      password: "",
      username: "",
    },
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async ({ password, username }: z.infer<typeof formSchema>) => {
    try {
      const response = await mutateAsync({ password, username });
      if (response) {
        form.reset({ password: "", username: "" });
        console.log(666, response);
        dispatch(setIsLogged());
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="flex max-w-sm flex-col items-center justify-center">
      <h2 className="text-3xl font-bold">Вход</h2>

      <Form {...form}>
        <form
          className="mt-3 flex w-full flex-col justify-center gap-3"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <InputField
            autoComplete="username"
            isLoading={isLoading}
            name="username"
            placeholder="Login"
            type="text"
          />

          <InputField
            autoComplete="current-password"
            isLoading={isLoading}
            name="password"
            placeholder="Password"
            type="password"
          />

          {isError && (
            <div className="text-start text-sm leading-none text-red-700">
              {(error as KyError)?.response?.status === 400 && "400"}
              {(error as KyError)?.response?.status === 426 && "426"}
            </div>
          )}

          <div className="grid">
            <LoadingButton isLoading={isLoading} size="lg" variant={"default"}>
              Авторизоваться
            </LoadingButton>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default Login;
