"use client"

import { useMyProfile } from '@/{ lib }/( api )';
import {
  ErrorEmptyStatus,
  Loading,
} from '@/components/customUI/Errors&Messages/Error&otherStuff';
import SideBar from '@/components/SideBar';
import Login from '@/app/( protected )/(auth)/Login';

export const Protected = ({ children }: { children: React.ReactNode }) => {
  const { isError, isSuccess, isLoading } = useMyProfile();

  console.log('Protected: isError', isError);

  if (isError) {
    return (
      <div className="flex justify-center items-center w-full h-[70vh]">
        <Login />
      </div>
    );
  }

  if (isLoading) {
    return <Loading />;
  }

  if (isSuccess) {
    return (
      <div className="flex justify-between w-full">
        <div className="sticky top-[100px] ml-6 h-[calc(100vh-100px)]">
          <SideBar />
        </div>
        <div className="flex flex-col px-5 relative overflow-y-auto">
          {children}
        </div>
      </div>
    );
  }

  return <ErrorEmptyStatus title="An unexpected error..." />;
};