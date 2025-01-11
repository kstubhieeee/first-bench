import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "First Bench",
  description: "Created by Kaustubh",
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
