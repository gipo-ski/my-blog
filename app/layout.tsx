import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MyProfilePic from "./components/MyProfilePic";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: ".po-ski.'s blog",
  description: "Created by .po-ski.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`dark:bg-slate-800 ${inter.className}`}>
        <Navbar />
        <MyProfilePic />
        {children}
        <Footer />
      </body>
    </html>
  );
}
