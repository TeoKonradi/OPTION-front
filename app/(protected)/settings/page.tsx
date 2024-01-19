"use client";
import Link from "next/link";

import { Button } from "../../../components/ui/button";

const SettingsPage = () => {
  return (
    <div className="grid w-full gap-8">
      <div className="text-4xl">Settings Page</div>
      <div className="flex gap-10">
        <div className="flex w-64 flex-col gap-3">
          <div className="text-3xl">Options:</div>
          <div className="flex flex-col gap-4">
            <Button asChild size={"sm"} variant={"default"}>
              <Link href={"/settings/permissions/list"}>Permisions List</Link>
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-3xl">Stats:</div>
          <div className="grid gap-1">
            <div className="text-2xl">All Items Quantity - {12}</div>
            <div className="text-2xl">All Avaliable Positions - {9}</div>
            <div className="text-2xl">Active Positions - {9}</div>
            <div className="text-2xl">Archived Positions - {0}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
