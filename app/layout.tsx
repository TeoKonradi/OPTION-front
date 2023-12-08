import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import { Provider } from 'react-redux';
import store from '../store/rootReducer';
import { ClientProviders } from '@/{ lib }/ClientProvider';
import { Protected } from '@/components/Protected';
import Bar from '@/components/Bar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'OPTION',
  description: 'We just made it',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
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
      </body>
    </html>
  );
}
