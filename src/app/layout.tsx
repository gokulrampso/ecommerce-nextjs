import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "e-Mart - Online Shopping",
  description: "Shop the latest products at e-Mart",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
} 