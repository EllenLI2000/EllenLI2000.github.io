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
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-WRBYV6TZGY" />
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-WRBYV6TZGY');
        `}} />
      </head>
      <body>{children}</body>
    </html>
  );
}
