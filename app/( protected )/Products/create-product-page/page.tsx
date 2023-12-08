"use client"
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { InputField } from '../../../../components/customUI/InputFields/InputField';
import { LoadingButton } from '../../../../components/ui/button';
import { Form } from '../../../../components/ui/form';
import { FileUploaderBeta } from '../../../../components/customUI/InputFields/FileUploader';
import { useEffect } from 'react';
import {
  ProductCreationRequest,
  useCreateProduct,
} from '../../../../{ lib }/( api )';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { resetFiles } from '../../../../store/FilesSlice';
import { TextareaField } from '../../../../components/customUI/InputFields/TextAreaField';
import { SizeInputs } from '../../../../components/customUI/InputFields/SizeInput';
import { InputFieldWrap } from '../../../../components/customUI/InputFields/InputFieldWrap';
import { BrandSelection } from '../../../../components/customUI/InputFields/BrandSelection';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/rootReducer';
import { CheckBox } from '../../../../components/customUI/InputFields/CheckBox';

const CreateBrandPage = () => {
  const { isLoading, mutateAsync, isSuccess } = useCreateProduct();
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
    size: z.string(),
    available_now: z.string(),
  });
  const imagesSchema = z.array(z.string());
  const sizesSchema = z.array(sizeSchema);
  const formSchema = z.object({
    header: z.string(),
    product_tag: z.string(),
    short_description: z.string().max(30),
    description: z.string(),
    price: z.string(),
    picture: imagesSchema,
    brand: z.array(z.string()),
    size: sizesSchema,
    show_in_market: z.boolean(),
    available: z.boolean(),
  });

  //   const brandPic = useSelector((state: RootState) => state.files[0]);

  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      header: '',
      product_tag: '',
      short_description: '',
      description: '',
      price: '',
      picture: [''],
      brand: [''],
      size: [{ size: '', available_now: '' }],
      show_in_market: true,
      available: true,
    },
    resolver: zodResolver(formSchema),
  });

  const { watch } = form;
  const formValues = watch();
  const disableButton =
    !form.formState.isValid || !formValues.size.length || !productPics.length;

  const onSubmit = async (formData: ProductCreationRequest) => {
    console.log('Form Data:', formData);
    if (typeof formData.price === 'string') {
      formData.price = parseInt(formData.price, 10);
    }
    formData.size = formData.size.map((size) => {
      if (typeof size.available_now === 'string') {
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
      console.error('Error during mutation:', error);
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
      router.push('/products');
    }
  }, [isSuccess, router]);
  const { setValue } = form;

  useEffect(() => {
    setValue('picture', productPics); // Sync form with Redux whenever productPics changes
  }, [productPics, setValue]);

  return (
    <div className="flex flex-col text-3xl w-full">
      <div className="text-4xl">Create Product Page</div>
      <Form {...form}>
        <form
          className="flex flex-col justify-center gap-3 mt-3"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <InputFieldWrap title={'Product Header:'}>
            <InputField
              isLoading={isLoading}
              name="header"
              placeholder="Product Header"
              type="text"
              required
            />
          </InputFieldWrap>
          <InputFieldWrap title={'Product Tag:'}>
            <InputField
              isLoading={isLoading}
              name="product_tag"
              placeholder="Product Tag"
              type="text"
            />
          </InputFieldWrap>
          <InputFieldWrap title={'Product lil Description:'}>
            <InputField
              isLoading={isLoading}
              name="short_description"
              placeholder="Product lil Description"
              type="text"
            />
          </InputFieldWrap>
          <InputFieldWrap title={'Product Description:'}>
            <TextareaField
              isLoading={isLoading}
              name="description"
              placeholder="Product Description"
              type="text"
            />
          </InputFieldWrap>
          <InputFieldWrap title={'Product Price:'}>
            <InputField
              isLoading={isLoading}
              name="price"
              placeholder="Product Price"
              type="number"
            />
          </InputFieldWrap>
          <InputFieldWrap title={'Product Brand:'}>
            <BrandSelection />
          </InputFieldWrap>
          <InputFieldWrap title={'Post Options'}>
            <div className="flex gap-4">
              <CheckBox name={'available'} label={'Product is Available:'} />
              <CheckBox
                name={'show_in_market'}
                label={"Product is Shown' in Market:"}
              />
            </div>
          </InputFieldWrap>

          <InputFieldWrap title={'Sizes:'}>
            <SizeInputs />
          </InputFieldWrap>
          <InputFieldWrap title={'Product Pictures:'}>
            <FileUploaderBeta isMultiple={true} fileType="picture" />
          </InputFieldWrap>
          <div className="grid mt-7">
            <LoadingButton
              variant={'default'}
              isLoading={isLoading}
              size="lg"
              type="submit"
              // disabled={disableButton}
              onClick={() => {
                checkForm();
              }}
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
