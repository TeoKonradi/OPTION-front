"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import * as z from "zod";

import { BrandSelection } from "../../../../components/customUI/InputFields/BrandSelection";
import { CheckBox } from "../../../../components/customUI/InputFields/CheckBox";
import { FileUploaderBeta } from "../../../../components/customUI/InputFields/FileUploader";
import { InputField } from "../../../../components/customUI/InputFields/InputField";
import { InputFieldWrap } from "../../../../components/customUI/InputFields/InputFieldWrap";
import { SizeInputs } from "../../../../components/customUI/InputFields/SizeInput";
import { TextareaField } from "../../../../components/customUI/InputFields/TextAreaField";
import { LoadingButton } from "../../../../components/ui/button";
import { Form } from "../../../../components/ui/form";
import { ProductCreationRequest, useCreateProduct } from "../../../../lib/api";
import { resetFiles } from "../../../../store/FilesSlice";
import { RootState } from "../../../../store/rootReducer";

const CreateBrandPage = () => {
  const { isLoading, isSuccess, mutateAsync } = useCreateProduct();
  const dispatch = useDispatch();
  const router = useRouter();
  const productPics = useSelector((state: RootState) => state.files);

  // const numericString = z
  //   .string()
  //   .refine((val) => parseInt(val), {
  //     message: 'Value must be a number.',
  //   })
  //   .transform((val) => Number(val));

  // const numberOrNumericString = z.union([z.number(), numericString]);

  const sizeSchema = z.object({
    available_now: z.string(),
    size: z.string(),
  });
  const imagesSchema = z.array(z.string());
  const sizesSchema = z.array(sizeSchema);
  const formSchema = z.object({
    available: z.boolean(),
    brand: z.array(z.string()),
    description: z.string(),
    header: z.string(),
    picture: imagesSchema,
    price: z.string(),
    product_tag: z.string(),
    short_description: z.string().max(30),
    show_in_market: z.boolean(),
    size: sizesSchema,
  });

  //   const brandPic = useSelector((state: RootState) => state.files[0]);

  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      available: true,
      brand: [""],
      description: "",
      header: "",
      picture: [""],
      price: "",
      product_tag: "",
      short_description: "",
      show_in_market: true,
      size: [{ available_now: "", size: "" }],
    },
    resolver: zodResolver(formSchema),
  });

  const { watch } = form;
  const formValues = watch();
  const disableButton =
    !form.formState.isValid || !formValues.size.length || !productPics.length;

  const onSubmit = async (formData: ProductCreationRequest) => {
    console.log("Form Data:", formData);
    if (typeof formData.price === "string") {
      formData.price = parseInt(formData.price, 10);
    }
    formData.size = formData.size.map((size) => {
      if (typeof size.available_now === "string") {
        return {
          ...size,
          available_now: parseInt(size.available_now, 10),
        };
      }
      return size;
    });
    try {
      await mutateAsync(formData);
    } catch (error) {
      console.error("Error during mutation:", error);
    }
  };

  const checkForm = () => {
    console.log(form);
    console.log(disableButton);
  };

  // Call me politely. Ur blonde hair Nightmare ;)
  // ∞
  // I do as I please
  // 7.4 foots obviosly

  useEffect(() => {
    return () => {
      dispatch(resetFiles());
    };
  }, [dispatch]);

  useEffect(() => {
    if (isSuccess) {
      router.push("/products");
    }
  }, [isSuccess, router]);
  const { setValue } = form;

  useEffect(() => {
    setValue("picture", productPics); // Sync form with Redux whenever productPics changes
  }, [productPics, setValue]);

  return (
    <div className="flex w-full flex-col text-3xl">
      <div className="text-4xl">Create Product Page</div>
      <Form {...form}>
        <form
          className="mt-3 flex flex-col justify-center gap-3"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <InputFieldWrap title={"Product Header:"}>
            <InputField
              isLoading={isLoading}
              name="header"
              placeholder="Product Header"
              required
              type="text"
            />
          </InputFieldWrap>
          <InputFieldWrap title={"Product Tag:"}>
            <InputField
              isLoading={isLoading}
              name="product_tag"
              placeholder="Product Tag"
              type="text"
            />
          </InputFieldWrap>
          <InputFieldWrap title={"Product lil Description:"}>
            <InputField
              isLoading={isLoading}
              name="short_description"
              placeholder="Product lil Description"
              type="text"
            />
          </InputFieldWrap>
          <InputFieldWrap title={"Product Description:"}>
            <TextareaField
              isLoading={isLoading}
              name="description"
              placeholder="Product Description"
              type="text"
            />
          </InputFieldWrap>
          <InputFieldWrap title={"Product Price:"}>
            <InputField
              isLoading={isLoading}
              name="price"
              placeholder="Product Price"
              type="number"
            />
          </InputFieldWrap>
          <InputFieldWrap title={"Product Brand:"}>
            <BrandSelection />
          </InputFieldWrap>
          <InputFieldWrap title={"Post Options"}>
            <div className="flex gap-4">
              <CheckBox label={"Product is Available:"} name={"available"} />
              <CheckBox label={"Product is Shown' in Market:"} name={"show_in_market"} />
            </div>
          </InputFieldWrap>

          <InputFieldWrap title={"Sizes:"}>
            <SizeInputs />
          </InputFieldWrap>
          <InputFieldWrap title={"Product Pictures:"}>
            <FileUploaderBeta fileType="picture" isMultiple={true} />
          </InputFieldWrap>
          <div className="mt-7 grid">
            <LoadingButton
              // disabled={disableButton}
              onClick={() => {
                checkForm();
              }}
              isLoading={isLoading}
              size="lg"
              type="submit"
              variant={"default"}
            >
              Ready
            </LoadingButton>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default CreateBrandPage;
