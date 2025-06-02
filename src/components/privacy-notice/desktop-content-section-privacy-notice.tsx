import React from "react";
import ContentSection from "../content-section";
import { PrivacyNoticeData } from "@/types/privacy-notice/privacy-notice";
interface DesktopContentSectionPrivacyAndNoticeProps {
  data: PrivacyNoticeData;
}
function DesktopContentSectionPrivacyAndNotice({
  data,
}: DesktopContentSectionPrivacyAndNoticeProps) {
  return (
    <div className="max-w-[1228px] flex-col justify-center items-center overflow-scroll px-[24px]">
      <div className="mt-[100px]">
        <div className="text-[80px] text-[#E74529] font-extrabold">
          {data.Heading}
        </div>
        <div className="text-[25px]">
          <p className="mb-6">{data.headingPara1}</p>
          <p className="mb-6">{data.headingPara2}</p>
          <p className="mb-6">{data.headingPara3}</p>
        </div>
      </div>

      <ContentSection heading={data.Data}>
        <p className="mb-6">{data.DataPara1}</p>
        <p className="mb-6">{data.DataPara2}</p>
      </ContentSection>

      <ContentSection heading={data.Lawful}>
        <p className="font-semibold mt-4">{data.LawfulDes}</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>{data.LawfulA}</li>
          <li>{data.LawfulB}</li>
          <li>{data.LawfulC}</li>
          <li>{data.LawfulD}</li>
        </ul>
      </ContentSection>

      <ContentSection heading={data.Personal}>
        <p className="mb-6">{data.PersonalPara}</p>
      </ContentSection>
      <ContentSection heading={data.Retention}>
        <p className="mb-6">{data.RetentionDes}</p>
      </ContentSection>
      <ContentSection heading={data.Security}>
        <p className="mb-6">{data.SecurityDes}</p>
      </ContentSection>

      <ContentSection heading={data.RightsHeading}>
        <p className="font-semibold mt-4">{data.RightsPara}</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>{data.RightsA}</li>
          <li>{data.RightsB}</li>
          <li>{data.RightsC}</li>
          <li>{data.RightsD}</li>
          <li>{data.RightsE}</li>
        </ul>
      </ContentSection>
      <ContentSection heading={data.Purpose}>
        <p className="font-semibold mt-4">{data.PurposePara}</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>{data.PurposeA}</li>
          <li>{data.PurposeB}</li>
          <li>{data.PurposeC}</li>
          <li>{data.PurposeD}</li>
          <li>{data.PurposeE}</li>
          <li>{data.PurposeF}</li>
          <li>{data.PurposeG}</li>
          <li>{data.PurposeH}</li>
          <li>{data.PurposeI}</li>
          <li>{data.PurposeJ}</li>
          <li>{data.PurposeK}</li>
        </ul>
      </ContentSection>

      <ContentSection heading={data.Media}>
        <p>{data.MediaPara}</p>
      </ContentSection>
      <ContentSection heading={data.Cookies}>
        <p>{data.CookiesPara}</p>
      </ContentSection>
      <ContentSection heading={data.Market}>
        <p>{data.MarketPara}</p>
      </ContentSection>
      <ContentSection heading={data.Quality}>
        <p>{data.QualityPara}</p>
      </ContentSection>
      <ContentSection heading={data.Contact}>
        <span>{data.ContactPara}</span> <span className="font-bold underline">{data.ContactEmail}</span>
      </ContentSection>

    
    </div>
  );
}

export default DesktopContentSectionPrivacyAndNotice;
