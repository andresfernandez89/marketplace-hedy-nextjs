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
  if (process.env.NEXT_PUBLIC_API_URI) {
    return (
      <html lang="en">
        <body
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
  throw new Error("Some env variables not set");
}
