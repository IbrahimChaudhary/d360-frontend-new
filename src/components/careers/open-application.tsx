import Image from "next/image"

export default function OpenApplication() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="lg:max-w-7xl mx-auto px-4 md:px-6">
        <div className="lg:grid flex flex-col-reverse lg:grid-cols-2 gap-8 items-center">
          {/* Left column - Content */}
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-[60px] ltr:lg:text-left rtl:lg:text-right text-center font-extrabold text-[#293242] leading-tight">Open Application</h2>

            <p className="text-[#293242] text-[14px] ltr:lg:text-left rtl:lg:text-right text-center md:text-[25px]  ">
              Ready to embark on a rewarding journey with D360 Bank but haven't found the perfect role yet? Use our Open
              Applications section to tell us about yourself, your passions, and your expertise.
            </p>

            <p className="text-[#293242] text-[14px] ltr:lg:text-left rtl:lg:text-right text-center  md:text-[25px]  ">
              Simply leave a message detailing your interests and potential contributions to D360 Bank, and upload your
              résumé. We're always on the lookout for talented individuals to join our team, and your application could
              be the first step towards a fulfilling career with us.
            </p>

            <div className="pt-4 lg:block flex justify-center">
              <button className="bg-[#293242]  hover:bg-[#2d3748] text-white text-[8px] lg:text-base font-bold px-6 py-3 rounded-md transition-colors duration-300">
                Join To Our Team
              </button>
            </div>
          </div>

          {/* Right column - Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative lg:w-full lg:h-full w-80 h-50 max-w-lg lg:max-w-md aspect-square lg:rounded-2xl overflow-hidden">
              <Image
                src="/career/hands.png"
                alt="Handshake representing joining the team"
                fill
                className="object-cover bg-[#E74529]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
