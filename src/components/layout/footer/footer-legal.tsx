"use client";

import { useStore } from "@/store/toggle-store";
import { footerData } from "@/data/footer";

export function FooterLegal() {
  const { language } = useStore();

  return (
    <div className="text-sm text-slate-500">
      <p className="text-xs text-[#C0C6D0] leading-relaxed font-extrabold">
        {footerData.legalText[language]}
      </p>
    </div>
  );
}
