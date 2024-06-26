import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Providers } from './providers';
import "./globals.css";

const roboto = Roboto({ 
  subsets: ["latin"], 
  weight: "300" 
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  icons: {
    icon: [
      {
        url: "/images/favicon.ico",
        href: "images/favicon.ico"
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <body className={roboto.className}>{children}</body>
      </Providers>
    </html>
  );
}
