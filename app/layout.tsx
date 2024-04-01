import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./gilroy.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Green-Tech | Home",
  description: "Green-Tech is a groundbreaking startup company specializing in eco-friendly tech solutions for businesses and individuals. It prioritize sustainability, seamlessly integrating green practices into everyday operations. From energy-efficient solutions to eco-conscious gadgets, they committed to a greener future.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
