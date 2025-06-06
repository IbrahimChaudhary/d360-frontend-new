export default function WorkSection() {
    return (
      <section className="bg-[#293242] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-12 gap-8 items-start">
            {/* Left column - Heading */}
            <div className="md:col-span-4 lg:col-span-3">
              <h2 className="text-[30px] md:text-[60px] ltr:lg:text-left rtl:lg:text-right text-center  font-extrabold text-white leading-tight">
                Work
                at D360
              </h2>
            </div>
  
            {/* Right column - Content */}
            <div className="md:col-span-8 lg:col-span-9 space-y-6">
              <p className="text-white text-[14px] md:text-[25px] ltr:lg:text-left rtl:lg:text-right text-center ">
                Pirate ipsum arrgh bounty warp jack. Measured cat splice killick line arr topsail measured gabion. Gabion
                davy red davy chase pirate yellow road. Or quarterdeck lubber timbers maroon no lanyard shot of. Belaying
                furl tell rat lubber crow's men quarterdeck ahoy.
              </p>
              <p className="text-white text-[14px] md:text-[25px] ltr:lg:text-left rtl:lg:text-right text-center ">
                Pirate ipsum arrgh bounty warp jack. Measured cat splice killick line arr topsail measured gabion. Gabion
                davy red davy chase pirate yellow road. Or quarterdeck lubber timbers maroon no lanyard shot of. Belaying
                furl tell rat lubber crow's men quarterdeck ahoy.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }
  