import type { Metadata } from "next";
//import localFont from "next/font/local";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

//components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairEffect from "@/components/StairEffect";
import React from "react";

const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    weight:["100","200","300","400","500","600","700","800"],
    variable: '--font-jetbrainsMono'
});

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "",
};

export default function RootLayout({children,}: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={jetbrainsMono.variable}
      >
      <Header />
      <StairEffect />
      <PageTransition>
          {children}
      </PageTransition>

      </body>
    </html>
  );
}
