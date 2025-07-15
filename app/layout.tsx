import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const ppNeue = localFont({
  src: "../public/fonts/ppneue.woff2",
});

export const metadata: Metadata = {
  title: "Ultra GSAP Animation",
  description: "An intro animation made using GSAP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ppNeue.className} antialiased`}>{children}</body>
    </html>
  );
}
