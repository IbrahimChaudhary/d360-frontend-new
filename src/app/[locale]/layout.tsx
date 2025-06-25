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

export default  function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: "en" | "ar" };
}) {
  const locale =  "en";

  return (
    <html lang={locale}>
      <body className={`${lato.variable} ${tajawal.variable}`}>
        <ClientLocaleSync locale={locale} />
        <LanguageHTMLUpdater locale={locale} />
        <FontSwitcher>{children}</FontSwitcher>
      </body>
    </html>
  );
}
