import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import ThemeProvider from "@/components/thems/ThemeProvider";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import { Toaster } from "sonner";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sakhawat - Portfolio",
  description: "Sakhawat Backend Developer",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const session = await getServerSession(authOptions);
  // console.log(session);

  return (
    <html lang="en">
      <body
        className={`${roboto.className} bg-slate-300`}
      >
        <ThemeProvider >
          <Navbar session={session} />
          <div className="min-h-screen">{children}</div>
          <Toaster position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
