"use client";

import { useMyProfile } from "@/{ lib }/( api )";

import Login from "@/app/(protected)/(auth)/Login";
import SideBar from "@/components/SideBar";
import {
  ErrorEmptyStatus,
  Loading,
} from "@/components/customUI/Errors&Messages/Error&otherStuff";

export const Protected = ({ children }: { children: React.ReactNode }) => {
  const { isError, isLoading, isSuccess } = useMyProfile();

  console.log("Protected: isError", isError);

  if (isError) {
    return (
      <div className="flex h-[70vh] w-full items-center justify-center">
        <Login />
      </div>
    );
  }

  if (isLoading) {
    return <Loading />;
  }

  if (isSuccess) {
    return (
      <div className="flex w-full justify-between">
        <div className="sticky top-[100px] ml-6 h-[calc(100vh-100px)]">
          <SideBar />
        </div>
        <div className="relative flex flex-col overflow-y-auto px-5">{children}</div>
      </div>
    );
  }

  return <ErrorEmptyStatus title="An unexpected error..." />;
};
