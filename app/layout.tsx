// app/layout.tsx
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import 'easymde/dist/easymde.min.css';

// Define WorkSans font
const workSans = localFont({
  src: [
    {
      path: './fonts/WorkSans-Thin.ttf', // Weight 100
      weight: '100',
      style: 'normal',
    },
    {
      path: './fonts/WorkSans-ExtraLight.ttf', // Weight 200
      weight: '200',
      style: 'normal',
    },
    {
      path: './fonts/WorkSans-Light.ttf', // Weight 300
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/WorkSans-Regular.ttf', // Weight 400
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/WorkSans-Medium.ttf', // Weight 500
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/WorkSans-SemiBold.ttf', // Weight 600
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/WorkSans-Bold.ttf', // Weight 700
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/WorkSans-ExtraBold.ttf', // Weight 800
      weight: '800',
      style: 'normal',
    },
    {
      path: './fonts/WorkSans-Black.ttf', // Weight 900
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-work-sans', // CSS custom property for Tailwind/CSS
});

export const metadata: Metadata = {
  title: 'RBstartups', // Updated for specificity
  description: 'A modern web application built with Next.js and WorkSans font', // Updated for clarity
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${workSans.variable} antialiased`}>{children}</body>
    </html>
  );
}