import type { Metadata } from "next";
import "./globals.css";
import { Bitter } from "next/font/google";
import { Toaster } from "../components/ui/toaster";

const bitter = Bitter({
  subsets: ["latin"],
  weight: ["400", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Home",
  description: "Generated by create next app",
  icons: "/favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${bitter.className}`}>
        {" "}
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
