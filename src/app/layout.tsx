import type { Metadata } from "next";
import "./globals.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import AppWrapper from "./context/AuthContext";
import Navbar from "@/components/ui/navbar";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Marketplace Hedy",
  description: "Website marketplace about different products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // className={cn(
        //   "dark m-auto flex min-h-screen max-w-7xl items-center justify-center bg-background font-sans antialiased",
        //   fontSans.variable,
        // )}
        className={cn(
          "dark m-auto max-w-7xl items-center bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <AppWrapper>
          <Navbar />
          {children}
        </AppWrapper>
      </body>
    </html>
  );
}
