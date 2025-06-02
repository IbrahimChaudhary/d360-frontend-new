import { Instagram, Linkedin, Twitter, Facebook } from "lucide-react"
import { TikTokIcon } from "@/components/icons/tiktok-icon"
import { FooterContent } from "@/types"

export const footerData: FooterContent = {
  aboutLinks: [
    { label: { en: "Lorem ipsum", ar: "لوريم إيبسوم" }, href: "#" },
    { label: { en: "Lorem ipsum", ar: "لوريم إيبسوم" }, href: "#" },
    { label: { en: "Lorem ipsum", ar: "لوريم إيبسوم" }, href: "#" },
    { label: { en: "Lorem ipsum", ar: "لوريم إيبسوم" }, href: "#" },
  ],

  contactLinks: [
    { label: { en: "Lorem ipsum", ar: "لوريم إيبسوم" }, href: "#" },
    { label: { en: "Lorem ipsum", ar: "لوريم إيبسوم" }, href: "#" },
    { label: { en: "Lorem ipsum", ar: "لوريم إيبسوم" }, href: "#" },
    { label: { en: "Lorem ipsum", ar: "لوريم إيبسوم" }, href: "#" },
  ],

  supportLinks: [
    { label: { en: "Lorem ipsum", ar: "لوريم إيبسوم" }, href: "#" },
    { label: { en: "Lorem ipsum", ar: "لوريم إيبسوم" }, href: "#" },
    { label: { en: "Lorem ipsum", ar: "لوريم إيبسوم" }, href: "#" },
    { label: { en: "Lorem ipsum", ar: "لوريم إيبسوم" }, href: "#" },
  ],

  socialLinks: [
    { icon: Instagram, href: "https://instagram.com/d360bank" },
    { icon: Linkedin, href: "https://linkedin.com/company/d360bank" },
    { icon: Twitter, href: "https://twitter.com/d360bank" },
    { icon: TikTokIcon, href: "https://tiktok.com/@d360bank" },
    { icon: Facebook, href: "https://facebook.com/d360bank" },
  ],

  moneyTransferLinks: [
    { label: { en: "Send Money to India", ar: "إرسال الأموال إلى الهند" }, href: "#" },
    { label: { en: "Send Money to Nigeria", ar: "إرسال الأموال إلى نيجيريا" }, href: "#" },
    { label: { en: "Send Money to Poland", ar: "إرسال الأموال إلى بولندا" }, href: "#" },
    { label: { en: "Send Money to Ghana", ar: "إرسال الأموال إلى غانا" }, href: "#" },
    { label: { en: "Send Money to Dubai", ar: "إرسال الأموال إلى دبي" }, href: "#" },
    { label: { en: "Send Money to the UK from India", ar: "إرسال الأموال إلى المملكة المتحدة من الهند" }, href: "#" },
    { label: { en: "Send Money to Saudi Arabia", ar: "إرسال الأموال إلى المملكة العربية السعودية" }, href: "#" },
    { label: { en: "Send Money to North Macedonia", ar: "إرسال الأموال إلى مقدونيا الشمالية" }, href: "#" },
    { label: { en: "Send Money to Kazakhstan", ar: "إرسال الأموال إلى كازاخستان" }, href: "#" },
  ],

  exchangeRateLinks: [
    { label: { en: "Convert SAR to GBP", ar: "تحويل الريال السعودي إلى الجنيه البريطاني" }, href: "#" },
    { label: { en: "Convert GBP to SAR", ar: "تحويل الجنيه البريطاني إلى الريال السعودي" }, href: "#" },
    { label: { en: "Convert SAR to CAD", ar: "تحويل الريال السعودي إلى الدولار الكندي" }, href: "#" },
    { label: { en: "Convert SAR to JPY", ar: "تحويل الريال السعودي إلى الين الياباني" }, href: "#" },
    { label: { en: "Convert SAR to SEK", ar: "تحويل الريال السعودي إلى الكرونة السويدية" }, href: "#" },
    { label: { en: "Convert SAR to EGP", ar: "تحويل الريال السعودي إلى الجنيه المصري" }, href: "#" },
    { label: { en: "Convert 100 SAR to GBP", ar: "تحويل 100 ريال سعودي إلى الجنيه البريطاني" }, href: "#" },
    { label: { en: "Convert 1000 SAR to CAD", ar: "تحويل 1000 ريال سعودي إلى الدولار الكندي" }, href: "#" },
    { label: { en: "Convert 100 SAR to INR", ar: "تحويل 100 ريال سعودي إلى الروبية الهندية" }, href: "#" },
    { label: { en: "Convert 1000 SAR to GBP", ar: "تحويل 1000 ريال سعودي إلى الجنيه البريطاني" }, href: "#" },
    { label: { en: "Convert 1000 SAR to GBP", ar: "تحويل 1000 ريال سعودي إلى الجنيه البريطاني" }, href: "#" },
    {
      label: { en: "Compare Exchange Rates", ar: "مقارنة أسعار الصرف" },
      href: "#",
    },
  ],

  legalText: {
    en: "All rights reserved © D360 Bank | Regulated by the Saudi Central Bank | Closed Joint Stock Company with a Capital of SAR 1,650,000,000 (CR No. 1010822737) Licensed in accordance with the Council of Ministers decree No. 389 dated 14/07/1443H corresponding to 15/02/2022G | Subject to the supervision of the Saudi Central Bank | 3074 Prince Mohammed bin Abdulaziz Rd, Al Olaya Dist. 12213 Riyadh, Saudi Arabia | www.D360.com",
    ar: "جميع الحقوق محفوظة © بنك D360 | خاضع لرقابة البنك المركزي السعودي | شركة مساهمة مقفلة برأس مال قدره 1,650,000,000 ريال سعودي (سجل تجاري رقم 1010822737) مرخصة بموجب قرار مجلس الوزراء رقم 389 بتاريخ 14/07/1443هـ الموافق 15/02/2022م | خاضعة لإشراف البنك المركزي السعودي | 3074 طريق الأمير محمد بن عبدالعزيز، حي العليا 12213 الرياض، المملكة العربية السعودية | www.D360.com",
  },
}
