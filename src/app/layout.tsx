import type { Metadata } from 'next';
import LeftMenu from '@/components/LeftMenu/LeftMenu';
import Header from '@/components/Header/Header';
import './globals.css';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="grid grid-cols-[260px_1fr]  h-screen">
        <LeftMenu />

        <main className="bg-bg-page">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
