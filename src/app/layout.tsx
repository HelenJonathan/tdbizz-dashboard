import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NextAutSessionProvider from "./providers/sessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tdbizz-dashboard",
  description: "tag deep",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAutSessionProvider>{children}</NextAutSessionProvider>
      </body>
    </html>
  );
}
