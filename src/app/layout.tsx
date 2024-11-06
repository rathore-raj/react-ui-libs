import Header from "@/components/shared/header";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistMono = localFont({
  src: "../assets/fonts/GeistMonoVF.woff",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "React/Next.js UI Lib Picker",
  description: "🎨 Pick the Right UI Library for your React or Next.js Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geistMono.className}>
      <body className="h-screen bg-gray-900 text-white antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}
