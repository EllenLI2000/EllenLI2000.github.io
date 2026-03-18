import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zhuoyang (Ellen) Li | Personal Website",
  description: "Personal research website of Ellen Li",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
