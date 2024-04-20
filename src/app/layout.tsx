import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ weight: ["400", "500", "600", "700", "900"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Saurabh Umadikar's Portfolio",
  description: 'Resume template.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
