export default function ShariahCommittee() {
    const responsibilities = [
      "Issuing religious approvals for the structures, mechanisms, contracts, and executive documents of all domestic and international banking products, programs, and services.",
      "Contributing to the development of structures, mechanisms, contracts, and executive documents in accordance with the principles of Islamic Shariah.",
      "Approving all contracts, policy guides, and procedures for the offered products and services.",
      "Ensuring the proper implementation of the board's rulings and fatwas by the bank through supervising the Shariah internal audit management.",
      "Adopting suitable methods and means to enhance the Shariah awareness of the bank's employees and customers.",
      "Establishing policies, reviewing training materials, and providing Shariah training for the bank's employees.",
      "Promoting the bank's involvement in introducing and contributing to the development of Islamic banking.",
    ]
  
    return (
      <section className=" py-4 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 ">
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-[#E74529] font-semibold lg:text-left text-center text-[20px] mb-4">Shariah Committee</h2>
  
            <p className="text-[#293242] lg:text-left text-center font-extrabold text-[20px] lg:text-[35px] mb-6">
              To achieve this, an independent Shariah Committee has been established to oversee all the bank's operations,
              products, and services.
            </p>
  
            <p className="text-[14px] lg:text-left text-center lg:text-[25px]  text-[#496083] mb-8">
              The responsibilities and tasks of the Shariah Committee can be summarized as follows:
            </p>
          </div>
  
          {/* Responsibilities List */}
          <div className="bg-[#F8F8F8] rounded-lg p-6 lg:p-8 ">
            <ol className="space-y-4 text-[#496083] text-[14px] lg:text-[30px]">
              {responsibilities.map((responsibility, index) => (
                <li key={index} className="flex gap-4">
                  <span className="  flex-shrink-0 mt-0.5">{index + 1}.</span>
                  <p className=" leading-relaxed">{responsibility}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    )
  }
  