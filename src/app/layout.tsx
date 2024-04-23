import type { Metadata } from "next";
import "./globals.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import AppWrapper from "./context/AuthContext";
import Auth from "./components/(Authentication)/auth";

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
        className={cn(
          "dark m-auto flex min-h-screen max-w-7xl items-center justify-center bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        {/* <AppWrapper>
          <Auth /> */}
        {children}
        {/* </AppWrapper> */}
      </body>
    </html>
  );
}
