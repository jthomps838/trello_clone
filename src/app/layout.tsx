import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ollert',
  description: 'Task Manager',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <header className='bg-slate-400 px-2 py-6'>
          <a href='' className='logo'>
            Ollert
          </a>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
