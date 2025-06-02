import { HomePageData } from "@/types/home/home";
import { ChevronDown } from "lucide-react";

interface MobileTransferSectionProps {
  data?: HomePageData;
}

export default function MobileTransferSection({
  data,
}: MobileTransferSectionProps) {
  return (
    <section className="block lg:hidden w-full px-6 py-16 bg-white ">
      <h2 className="text-2xl font-extrabold text-center text-[#263244] uppercase leading-tight">
        {data?.TransferHeading}
      </h2>
      <p className="text-lg text-[#263244] text-center mb-4">
        {data?.TransferSubHeading}
      </p>
      <p className="text-sm text-[#263244] text-center max-w-xs mx-auto mb-6">
        {data?.TransferDescription}
      </p>

      <div className="bg-gray-50 p-2 rounded-xl shadow-md space-y-3 max-w-sm mx-auto text-black">
        <div className=" bg-white p-2 rounded-lg ">
          <span className="text-[8px] text-left">You Send Exactly</span>
          <div className="flex justify-between items-center">
            <span className="font-bold text-xl">{data?.Sender}</span>
            <span className="text-sm flex items-center font-medium text-black">
              🇺🇸 USD
              <ChevronDown className="align-middle" size={18} />
            </span>
          </div>
        </div>

        <div className=" bg-white p-2 rounded-lg">
          <span className="text-xs ">Recipient Gets</span>
          <div className="flex justify-between items-center">
            <span className="font-bold text-xl">{data?.Recipient}</span>
            <span className="text-sm flex items-center font-medium text-black ">
              🇪🇺 EUR <ChevronDown className="align-middle" size={18} />
            </span>
          </div>
        </div>

        <div className="bg-white p-2 rounded-lg">
          <span className="text-sm flex items-center font-medium text-black">
            Bank Transfer Fee <ChevronDown className="align-middle" size={18} />{" "}
          </span>
          <span className="text-xl font-bold">{data?.Fee}</span>
        </div>

        <div className="bg-white p-2 rounded-lg">
          <span className=" text-sm flex items-center font-medium text-black">
            Amount You’ll Convert{" "}
            <ChevronDown className="align-middle hidden" size={18} />
          </span>
          <span className="text-xl font-bold">{data?.Conversion} </span>
        </div>

        <button className="w-full bg-[#E74529] text-white py-2 rounded-md text-sm font-semibold">
          Send Money
        </button>
      </div>
    </section>
  );
}
