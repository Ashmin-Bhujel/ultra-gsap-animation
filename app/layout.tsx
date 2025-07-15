import type { Metadata } from "next";
import "./globals.css";

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
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
