import { Phone, Mail } from "lucide-react"

export default function ContactSection() {
  return (
    <section className="py-12 md:py-16 ">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-left">
          <h2 className="text-2xl rtl:text-right md:text-3xl font-extrabold text-[#1F2E41] mb-4">Get in Touch</h2>

          <p className="text-[#1F2E41] font-bold rtl:text-right text-base md:text-[25px] mb-8">Our Investor Relations team is here to assist you</p>

          <div className="space-y-4">
            {/* Phone */}
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0">
                <Phone className="w-5 h-5 text-[#EB644C]" />
              </div>
              <a href="tel:+966111234567" className="text-[#1F2E41] hover:text-[#EB644C] transition-colors duration-200">
                +966 11 123 4567
              </a>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0">
                <Mail className="w-5 h-5 text-[#EB644C]" />
              </div>
              <a
                href="mailto:investor.relations@d360bank.com"
                className="text-[#1F2E41] hover:[#EB644C]transition-colors duration-200"
              >
                investor.relations@d360bank.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
