import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FontSwitcher from "@/components/font-switcher";
// import { LanguageProvider } from "@/context/language-context";
import { Lato, Tajawal } from "next/font/google";
import LanguageHTMLUpdater from "@/components/language-html-updater";


export const metadata: Metadata = {
  title: "D360 Bank",
  description: "D360 Bank",
};

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-lato",
});

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-tajawal",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.variable} ${tajawal.variable}`}>
        <LanguageHTMLUpdater />
        <FontSwitcher>
        {children}

        </FontSwitcher>
      </body>
    </html>
  );
}
