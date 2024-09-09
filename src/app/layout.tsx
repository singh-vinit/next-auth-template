import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "next-auth",
  description: "Authentication through next-auth library",
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
