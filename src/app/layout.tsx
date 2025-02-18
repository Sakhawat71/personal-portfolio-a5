import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import ThemeProvider from "@/components/thems/ThemeProvider";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sakhawat - Portfolio",
  description: "Sakhawat Backend Developer",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} bg-slate-300`}
      >
        <ThemeProvider >
          <Navbar />
          <div className="min-h-screen">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
