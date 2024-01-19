"use client";
import React from "react";
import { Provider } from "react-redux";

import Bar from "@/components/Bar";
import { Protected } from "@/components/Protected";
import { ClientProviders } from "@/lib/ClientProvider";

import store from "../../store/rootReducer";

const ProviderLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <ClientProviders>
        <main className="flex w-full justify-center bg-white font-HandJet">
          <div className="flex w-full max-w-[1300px] flex-col gap-4">
            <Bar />
            <Protected>{children}</Protected>
          </div>
        </main>
      </ClientProviders>
    </Provider>
  );
};

export default ProviderLayout;
