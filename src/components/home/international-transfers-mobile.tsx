import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { InternationalData } from "@/types/international/international";

interface InternationalTransferProps {
  data: InternationalData;
  heading: string;
  uppertext?: string;
  description: string;
  lowertext?: string;
  container?: string;
}

export default function TransferSection({
  data,
  description,
  heading,
  lowertext,
  uppertext,
  container,
}: InternationalTransferProps) {
  return (
    <section
      className={cn(
        "  w-full lg:px-10 max-w-7xl mx-auto py-8 lg:py-16 bg-white ",
        container
      )}
    >
      <div className="lg:w-[70%] w-full space-y-2">
        <p className="rtl:lg:text-right ltr:lg:text-left text-[14px] lg:text-[20px] text-center text-[#ACBBD1]">
          {uppertext}
        </p>
        <h2 className="text-[30px] rtl:lg:text-right lg:text-[60px] w-full lg:w-[90%] font-extrabold text-center lg:text-left text-[#263244] uppercase lg:normal-case leading-tight">
          {heading}
        </h2>
        <p className="text-[14px] lg:text-[30px] w-full lg:w-[50%] text-[#263244] rtl:lg:text-right ltr:lg:text-left text-center mb-4">
          {description}
        </p>
        {/* <p className="text-[30px] text-[#263244] text-center max-w-xs mx-auto mb-6">
          {lowertext}
        </p> */}
      </div>

      <div className="bg-gray-50 lg:w-[35%] p-2   rounded-xl shadow-md space-y-3  mx-4 lg:mx-0 text-black">
        <div className=" bg-white p-2 rounded-lg ">
          <span className="text-[12px] font-semibold text-left">
            {data.Sender}
          </span>
          <div className="flex justify-between items-center">
            <span className="font-bold text-[36px]">{data.SenderMoney}</span>
            <div className="text-sm flex items-center font-medium text-black">
              <div className="flex items-center gap-2">
                <img
                  src={
                    data?.SenderImg?.formats?.large?.url ||
                    data?.SenderImg?.formats?.medium?.url ||
                    data?.SenderImg?.url
                      ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${
                          data?.SenderImg?.formats?.large?.url ||
                          data?.SenderImg?.formats?.medium?.url ||
                          data?.SenderImg?.url
                        }`
                      : "/international/international-hero.png"
                  }
                  className="w-[16] h-[16]"
                  alt=""
                />
                <span className="text-[24px] font-semibold">
                  {data.SenderCountry}
                </span>
              </div>
              <ChevronDown className="align-middle" size={18} />
            </div>
          </div>
        </div>

        <div className=" bg-white p-2 rounded-lg">
          <span className="text-[12px] font-semibold ">{data.Receiver}</span>
          <div className="flex justify-between items-center">
            <span className="font-bold text-[36px]">{data.ReceiverMoney}</span>
            <div className="text-sm flex items-center font-medium text-black ">
              <div className="flex items-center gap-2">
                <img
                  src={
                    data?.ReceiverImg?.formats?.large?.url ||
                    data?.ReceiverImg?.formats?.medium?.url ||
                    data?.ReceiverImg?.url
                      ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${
                          data?.ReceiverImg?.formats?.large?.url ||
                          data?.ReceiverImg?.formats?.medium?.url ||
                          data?.ReceiverImg?.url
                        }`
                      : "/international/international-hero.png"
                  }
                  className="w-[16] h-[16]"
                  alt=""
                />
                <span className="text-[24px] font-semibold">
                  {" "}
                  {data.ReceiverCountry}
                </span>
              </div>
              <ChevronDown className="align-middle" size={18} />
            </div>
          </div>
        </div>

        <div className="bg-white p-2 rounded-lg">
          <span className="text-[12px] flex items-center font-medium text-black">
            {data.Bank} <ChevronDown className="align-middle" size={18} />{" "}
          </span>
          <span className="text-[36px] font-bold">{data.BankMoney}</span>
        </div>

        <div className="bg-white p-2 rounded-lg">
          <span className=" text-[12px] flex items-center font-medium text-black">
            {data.Convert}{" "}
            <ChevronDown className="align-middle hidden" size={18} />
          </span>
          <span className="text-[36px] font-bold">{data.ConvertMoney}</span>
        </div>

        <button className="w-full bg-[#E74529] text-white py-2 rounded-md text-sm font-semibold">
          {data.FeatBtn}
        </button>
      </div>
    </section>
  );
}
