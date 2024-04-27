import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import AppWrapper from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import "./globals.css";

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
            "dark m-auto flex min-h-screen max-w-7xl flex-col items-center bg-background font-sans antialiased",
            fontSans.variable,
          )}
        >
          <AppWrapper>
            <CartProvider>
              <Navbar />
              {children}
            </CartProvider>
          </AppWrapper>
        </body>
      </html>
    );
  }
  throw new Error("Some env variables not set");
}
