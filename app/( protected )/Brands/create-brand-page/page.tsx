"use client"
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { useForm } from 'react-hook-form';

import { InputField } from '../../../../components/customUI/InputFields/InputField';
import { LoadingButton } from '../../../../components/ui/button';
import { Form } from '../../../../components/ui/form';
import { FileUploaderBeta } from '../../../../components/customUI/InputFields/FileUploader';
import { useEffect } from 'react';
import { useCreateBrand } from '../../../../lib/api';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/rootReducer';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { resetFiles } from '../../../../store/FilesSlice';
import { InputFieldWrap } from '../../../../components/customUI/InputFields/InputFieldWrap';

const CreateBrandPage = () => {
  const { isLoading, mutateAsync, isSuccess } = useCreateBrand();
  const dispatch = useDispatch();
  const router = useRouter();
  const formSchema = z.object({
    name: z.string(),
    tag: z.string(),
    picture: z.string(),
  });

  const brandPic = useSelector((state: RootState) => state.files[0]);

  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      name: '',
      tag: '',
      picture: '',
    },
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async ({
    name,
    tag,
    picture,
  }: z.infer<typeof formSchema>) => {
    console.log('name -', name, 'tag -', tag, 'image -', (picture = brandPic));
    await mutateAsync({ name, tag, picture });
  };

  // setIsLoading(false);
  // const changeIsLoading = () => {
  //   setIsLoading(!isLoading);
  // };

  // Call me politely. Ur blonde hair Nightmare ;)
  // ∞
  // I do as I please
  // 7.4 foots obviosly

  const { watch } = form;
  const formValues = watch(); // watch all form values

  // Check if all the fields have been filled out
  const disableButton = !formValues.name || !formValues.tag || !brandPic;

  useEffect(() => {
    return () => {
      dispatch(resetFiles());
    };
  }, [dispatch]);

  useEffect(() => {
    if (isSuccess) {
      router.push('/brands');
    }
  }, [isSuccess, router]);

  return (
    <div className="flex flex-col text-3xl w-full">
      <div className="text-4xl">Create Brand Page</div>
      <Form {...form}>
        <form
          className="flex flex-col justify-center gap-3 mt-3"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <InputFieldWrap title={'Brand Name:'}>
            <InputField
              isLoading={isLoading}
              name="name"
              placeholder="Brand Name"
              type="text"
            />
          </InputFieldWrap>
          <InputFieldWrap title={'Brand Tag:'}>
            <InputField
              isLoading={isLoading}
              name="tag"
              placeholder="Brand Tag"
              type="text"
            />
          </InputFieldWrap>

          <div className="flex w-full">
            <div className="w-96">Brand Picture</div>
            <div className="w-full">
              <FileUploaderBeta fileType="picture" isMultiple={false} />
            </div>
          </div>
          <div className="grid mt-7">
            <LoadingButton
              variant={'default'}
              isLoading={isLoading}
              size="lg"
              type="submit"
              disabled={disableButton}
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
