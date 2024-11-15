import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar/Sidebar";
import TanstackProvider from "./TanstackProvider";
import { Toaster } from "@/components/ui/toaster";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Vendpal",
  description: "Beautiful Vendpal dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TanstackProvider>
          <Navbar />
          <section className="flex relative z-[9] top-[100px]">
            <Sidebar />
            <main className="relative w-full lg:w-[calc(100%-350px)] lg:left-[350px]">
              {children}
            </main>
          </section>
        </TanstackProvider>
        <Toaster />
      </body>
    </html>
  );
}
