import { ShariahCommitteeData } from "@/types/shahriah-committee/shahriah-committee"

interface ShahriahCommitteeProps{
  data:ShariahCommitteeData
}
export default function ShariahCommittee({data}:ShahriahCommitteeProps) {

    const responsibilities = data.ShariahPoints
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
  
    return (
      <section className=" py-4 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 ">
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-[#E74529] font-semibold lg:text-left text-center text-[20px] mb-4">{data.Shariah}</h2>
  
            <p className="text-[#293242] lg:text-left text-center font-extrabold text-[20px] lg:text-[35px] mb-6">
              {data.ShariahDes1}
            </p>
  
            <p className="text-[14px] lg:text-left text-center lg:text-[25px]  text-[#496083] mb-8">
            {data.ShariahDes2}
            </p>
          </div>
  
          {/* Responsibilities List */}
          <div className="bg-[#F8F8F8] rounded-lg p-6 lg:p-8 ">
            <ol className="space-y-4 text-[#496083] text-[14px] lg:text-[30px]">
              {responsibilities.map((responsibility, index) => (
                <li key={index} className="flex gap-4">
                  <p className=" leading-relaxed">{responsibility}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    )
  }
  