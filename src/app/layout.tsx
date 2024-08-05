import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "../styles/globals.scss";

const inter = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Grow easy assignment",
  description: "For a frontend intern role",
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
