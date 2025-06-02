"use client";

import { useTranslations } from "@/lib/i18n";

export function FooterLegal() {
  const { t } = useTranslations();

  return (
    <div className="text-sm text-slate-500">
      <h3 className="font-semibold text-[#E74529] mb-2">
        {t("footer.legal.moneyTransfers")}
      </h3>
      <p className="text-sm leading-relaxed mb-4 text-[#999999]">
        {t("footer.legal.moneyTransfersText")}
      </p>

      <h3 className="font-semibold text-[#E74529] mb-2">
        {t("footer.legal.exchangeRates")}
      </h3>
      <p className="text-sm leading-relaxed mb-4 text-[#999999]">
        {t("footer.legal.exchangeRatesText")}
      </p>

      <p className="text-xs text-[#999999] leading-relaxed">
        {t("footer.legal.copyright")}
      </p>
    </div>
  );
}
