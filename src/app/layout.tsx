import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({ weight: "variable", subsets: ["latin"], variable: "--font-instrumentSans" });

export const metadata: Metadata = {
  title: "Link Sharing App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${instrumentSans.variable}`}>{children}</body>
    </html>
  );
}
