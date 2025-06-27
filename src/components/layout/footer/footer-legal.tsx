"use client";

import { useTranslations } from "@/lib/i18n";
import { FooterData } from "@/types/footer/footer";
interface FooterLegalProps {
  data: FooterData;
}
export function FooterLegal({ data }: FooterLegalProps) {
  const { t } = useTranslations();

  // return (
  //   <div className="text-sm text-slate-500">
  //     <h3 className="font-semibold text-[#E74529] mb-2">
  //       {data.International}
  //     </h3>
  //     <p className="text-sm leading-relaxed mb-4 text-[#999999]">
  //       {data.InternationalDes}
  //     </p>

  //     <h3 className="font-semibold text-[#E74529] mb-2">{data.Exchange}</h3>
  //     <p className="text-sm leading-relaxed mb-4 text-[#999999]">
  //       {data.ExchangeDes}
  //     </p>

  //     <p className="text-xs text-[#999999] leading-relaxed">
  //       {data.FooterDes}{" "}
  //     </p>
  //   </div>
  // );

    return (
    <div className="text-sm text-slate-500">
      <p className="text-xs text-[#C0C6D0] leading-relaxed font-extrabold">
        {data.FooterDes}
      </p>
    </div>
  );
}
