"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Phone, Globe } from "lucide-react";
import { ContactPageData } from "@/types/contact-us/contact-us";
import { useStore } from "@/store/toggle-store";
import { toast } from "sonner";
import Link from 'next/link'

const formSchema = z.object({
  organization: z.string().nonempty("Organization name is required"),
  fullName: z.string().nonempty("Full name is required"),
  phone: z.string().nonempty("Phone number is required"),
  email: z.string().email("Enter a valid email address"),
  website: z.string().optional(),
  message: z.string().nonempty("Message is required"),
  agree: z.boolean().refine((val) => val === true, {
    message: "You must agree to the privacy notice",
  }),
});

type FormData = z.infer<typeof formSchema>;
interface BusinessFormProps {
  data: ContactPageData;
}
export function BusinessForm({ data }: BusinessFormProps) {
  const { language } = useStore();
  const isRTL = language === "ar";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (formData: FormData) => {
    try {
      const response = await fetch("/api/partnership", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subject: "Partnership",
          organizationName: formData.organization,
          fullName: formData.fullName,
          phoneNumber: formData.phone,
          email: formData.email,
          website: formData.website || "",
          message: formData.message,
        }),
      });
  
      if (response.status === 200) {
        toast.success(
          isRTL ? "تم إرسال رسالتك بنجاح" : "Your message has been sent successfully!"
        );
      } else {
        toast.error(
          isRTL ? "فشل في إرسال الرسالة. الرجاء المحاولة لاحقًا." : "Failed to send message. Please try again."
        );
      }
    } catch (err) {
      toast.error(
        isRTL ? "حدث خطأ في الشبكة. تحقق من الاتصال." : "Network error. Please check your connection."
      );
    }
  };

  return (
    <section className="pb-16  lg:py-16 px-4 max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-[30px] md:text-[50px] w-[83%] lg:w-full  font-extrabold text-[#263244] max-w-5xl mx-auto mb-12 leading-tight"
      >
        {data.Title2}
      </motion.h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-5xl mx-auto px-4  text-[#293242]"
      >
        <div className="grid grid-cols-1 md:grid-cols-2  gap-6 ">
          <div className="lg:space-y-12 space-y-6">
            <div className="flex flex-col">
              <input
                {...register("organization")}
                placeholder={isRTL ? "اسم المؤسسة" : "Organization name"}
                className="border-b border-[#293242] pb-4 lg:placeholder:text-[20px] focus:outline-none py-2 placeholder:text-[#293242]"
              />
              {errors.organization && (
                <span className="text-sm text-red-500">
                  {errors.organization.message}
                </span>
              )}
            </div>
            <div className="flex flex-col">
              <input
                {...register("fullName")}
                placeholder={isRTL ? "الاسم الكامل" : "Full Name"}
                className="border-b border-[#293242] pb-4 lg:placeholder:text-[20px] focus:outline-none py-2 placeholder:text-[#293242]"
              />
              {errors.fullName && (
                <span className="text-sm text-red-500">
                  {errors.fullName.message}
                </span>
              )}
            </div>
            <div className="flex flex-col">
              <input
                {...register("phone")}
                placeholder={isRTL ? "رقم الهاتف" : "Phone Number"}
                className="border-b border-[#293242] pb-4 lg:placeholder:text-[20px] focus:outline-none py-2 placeholder:text-[#293242]"
              />
              {errors.phone && (
                <span className="text-sm text-red-500">
                  {errors.phone.message}
                </span>
              )}
            </div>
            <div className="flex flex-col">
              <input
                {...register("email")}
                placeholder={isRTL ? "البريد الإلكتروني" : "Email Address"}
                className="border-b border-[#293242] pb-4 lg:placeholder:text-[20px] focus:outline-none py-2 placeholder:text-[#293242]"
              />
              {errors.email && (
                <span className="text-sm text-red-500">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className="flex flex-col">
              <input
                {...register("website")}
                placeholder={isRTL ? "الموقع الإلكتروني" : "Website"}
                className="border-b border-[#293242] lg:placeholder:text-[20px] focus:outline-none py-2 pb-4 placeholder:text-[#293242]"
              />
            </div>
          </div>

          <div className="flex-1 ml-4">
            <textarea
              {...register("message")}
              placeholder={isRTL ? "رسالتك" : "Message"}
              className="bg-[#f8f8f8] p-4 rounded-xl w-full resize-none placeholder:text-[#293242] placeholder:text-[14px] lg:placeholder:text-[20px] h-[200px] lg:h-[440px]"
            />

            {errors.message && (
              <span className="text-sm text-red-500">
                {errors.message.message}
              </span>
            )}
          </div>
        </div>

        <div className="flex flex-col  ">
          <div className="mt-4 flex justify-center ">
            <label className="flex items-center rtl:flex-row rtl:gap-2 ">
              <input type="checkbox" {...register("agree")} className="mr-2 ch-20" />
              <span className="text-[14px] lg:text-[20px]">
                {data.privacy}{" "}
                <span className="font-bold">
                  <Link href={isRTL ? "/ar/privacy-notice" : "/en/privacy-notice"}>                  
                  {data.privacyBold}
                </Link>
                </span>
              </span>
            </label>
            {errors.agree && (
              <p className="text-sm text-red-500">{errors.agree.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="mt-6 bg-[#E74529] lg:text-[20px] text-[8px] text-white  px-6 py-2 rounded-xl cursor-pointer lg:w-[20%] mx-auto btn-14"
          >
            {data.sendMsg}
          </button>
        </div>
      </form>

      <div className="mt-16 flex justify-between px-4 text-[14px] lg:text-[20px] text-[#263244]">
        <div className="rtl:space-y-7 ltr:space-y-4 w-[50%]">
          <p> {data.TollFree}</p>
          <p> {data.outside}</p>
        </div>
        <div className="ltr:space-y-10 rtl:space-y-14 rtl:lg:space-y-7 ltr:lg:space-y-4 lg:space-y-0">
          <div className="text-[#E74529]   items-center flex gap-2">
            <img
              src="/contact/globe.svg"
              className="w-[15px] h-[15px] lg:w-[30px] lg:h-[30px] rtl:scale-x-[-1]"
              alt=""
            />{" "}
            <span> {data.insidePhone} </span>
          </div>
          <div className="text-[#E74529]  flex items-center gap-2">
            <img
              src="/contact/phone.svg"
              className="w-[15px] h-[15px] lg:w-[30px] lg:h-[30px] rtl:scale-x-[-1]"
              alt=""
            />{" "}
            {data.outsidePhone}
          </div>
        </div>
      </div>
    </section>
  );
}
