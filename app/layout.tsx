import Navbar from '@/components/Navbar';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ToastProvider } from '@/providers/react-toast';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Almujahid Jamion | Full-Stack Web Developer',
  description: 'My latest portfolio created in NextJS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log('Layout');
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ToastProvider />
        <main className='dark:bg-slate-900 bg-slate-100 dark:text-slate-200'>
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
