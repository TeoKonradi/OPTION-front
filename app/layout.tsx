import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ProviderLayout from './( protected )/layout';


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
        <ProviderLayout>
          {children}
        </ProviderLayout>
      </body>
    </html>
  );
}
