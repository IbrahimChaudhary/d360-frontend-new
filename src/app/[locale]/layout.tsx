import { ReactNode } from "react";
import { Lato, Tajawal } from "next/font/google";
import LanguageHTMLUpdater from "@/components/language-html-updater";
import FontSwitcher from "@/components/font-switcher";
import ClientLocaleSync from "@/components/client-locale-sync";
import "../globals.css";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
  variable: "--font-lato",
});

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["400", "700", "900"],
  display: "swap",
  variable: "--font-tajawal",
});

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: "en" | "ar" }>;
}) {
  const { locale } = await params;

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body className={`${lato.variable} ${tajawal.variable}`}>
        <ClientLocaleSync locale={locale} />
        <LanguageHTMLUpdater locale={locale} />
        <FontSwitcher>{children}</FontSwitcher>
      </body>
    </html>
  );
}
