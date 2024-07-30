import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

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
      <body className={`${instrumentSans.variable} md:h-[1024px] md:w-[768px] mx-auto bg-gray-light font-instrumentSans`}>
        <Toaster
          position={"bottom-center"}
          toastOptions={{
            style: {
              background: "#333333",
              color: "#fff",
            },
          }}
        />
        {children}
      </body>
    </html>
  );
}
