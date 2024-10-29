import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 400 600 700 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 400 600 700 900",
});

export const metadata: Metadata = {
  title: "abash_catalog",
  description: "Bext catalog in the hello world!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} h-[100dvh] bg-gradient-to-br from-green-300 to-blue-600 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
