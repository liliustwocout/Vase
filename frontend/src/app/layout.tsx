// Root layout — Vase marketplace
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { CartProvider } from '@/lib/cart-context';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Vase — AI & Social Solutions',
  description: 'Nền tảng dịch vụ và tài khoản công cụ AI hàng đầu Việt Nam',
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#f5f7f9]">
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
