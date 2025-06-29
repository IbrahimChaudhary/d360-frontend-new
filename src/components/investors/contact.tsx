import { AnnualReportsData } from "@/types/annual-report/annual-report"
import { Phone, Mail } from "lucide-react"
interface ContactSectionProps{
  data?:any
}
export default function ContactSection({data}:ContactSectionProps) {
  return (
    <section className="py-12 md:py-16 ">
      <div className="lg:max-w-5xl max-w-4xl mx-auto px-4 lg:px-0">
        <div className="text-left">
          <h2 className="text-[14px] rtl:text-right md:text-[30px] font-extrabold text-[#1F2E41] mb-4">{data?.Contact}</h2>

          <p className="text-[#1F2E41] font-[400] rtl:text-right text-[14px] md:text-[20px] mb-8">{data?.ContactDes}</p>

          <div className="space-y-4">
            {/* Phone */}
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0">
                <img src="/investor/mail.svg"  className="  lg:w-[30px] w-[16px] h-[16px] lg:h-[30px]" alt="" />
              </div>
              <a href="tel:+966111234567" className="text-[#1F2E41]  text-[14px] lg:text-[20px] hover:text-[#EB644C] transition-colors duration-200">
              {data?.Phone}
              </a>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0">
              <img src="/investor/phone.svg" className=" lg:w-[30px] w-[16px] h-[16px] lg:h-[30px]" alt="" />
              </div>
              <a
                href="mailto:investor.relations@d360bank.com"
                className="text-[#1F2E41] text-[14px] lg:text-[20px] hover:[#EB644C]transition-colors duration-200"
              >
                {data?.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
