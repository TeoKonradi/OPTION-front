"use client"
import Bar from '@/components/Bar'
import { Protected } from '@/components/Protected'
import { ClientProviders } from '@/{ lib }/ClientProvider'
import React from 'react'
import { Provider } from 'react-redux'
import store from '../../store/rootReducer';

const ProviderLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <Provider store={store}>
          <ClientProviders>
            <main className="w-full flex justify-center bg-white font-HandJet">
              <div className="w-full max-w-[1300px] flex-col gap-4 flex">
                <Bar />
                <Protected>
                  {children}
                </Protected>
              </div>
            </main>
          </ClientProviders>
        </Provider>
  )
}

export default ProviderLayout