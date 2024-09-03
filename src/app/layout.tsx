import type { Metadata } from "next";
import localFont from "next/font/local";
import { Tinos } from "next/font/google";
import "./globals.css";

const ogFont = localFont({
  src: './times-new-roman.ttf',
  display: 'swap',
})

const tinos = Tinos({
  weight: ['400', '700'],
  subsets: ["cyrillic"]
})

export const metadata: Metadata = {
  title: "Xander Chin's Website",
  description: "Xander Chin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={tinos.className}>{children}</body>
    </html>
  );
}
