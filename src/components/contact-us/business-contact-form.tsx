"use client"

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { Phone, Globe } from "lucide-react"

const formSchema = z.object({
  organization: z.string().nonempty("Organization name is required"),
  fullName: z.string().nonempty("Full name is required"),
  phone: z.string().nonempty("Phone number is required"),
  email: z.string().email("Enter a valid email address"),
  website: z.string().optional(),
  message: z.string().nonempty("Message is required"),
  agree: z.boolean().refine(val => val === true, {
    message: "You must agree to the privacy notice",
  }),
})

type FormData = z.infer<typeof formSchema>

export function BusinessForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = (data: FormData) => {
    console.log("Submitted:", data)
  }

  return (
    <section className="pb-16  lg:py-16 px-4 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-2xl md:text-3xl font-bold text-[#263244] max-w-2xl mx-auto mb-12"
      >
        For business ideas, partnerships, media-related ventures, please fill
        out this form and let’s hear from you!
      </motion.h2>
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-5xl mx-auto px-4  text-[#293242]"
    >
        <div className="grid grid-cols-1 md:grid-cols-2  gap-6 ">
      <div className="space-y-6">
        <div className="flex flex-col">
          <input
            {...register("organization")}
            placeholder="Organization name"
            className="border-b focus:outline-none py-2 placeholder:text-[#6D809C]"
          />
          {errors.organization && <span className="text-sm text-red-500">{errors.organization.message}</span>}
        </div>
        <div className="flex flex-col">
          <input
            {...register("fullName")}
            placeholder="Full Name"
            className="border-b focus:outline-none py-2 placeholder:text-[#6D809C]"
          />
          {errors.fullName && <span className="text-sm text-red-500">{errors.fullName.message}</span>}
        </div>
        <div className="flex flex-col">
          <input
            {...register("phone")}
            placeholder="Phone Number"
            className="border-b focus:outline-none py-2 placeholder:text-[#6D809C]"
          />
          {errors.phone && <span className="text-sm text-red-500">{errors.phone.message}</span>}
        </div>
        <div className="flex flex-col">
          <input
            {...register("email")}
            placeholder="Email Address"
            className="border-b focus:outline-none py-2 placeholder:text-[#6D809C]"
          />
          {errors.email && <span className="text-sm text-red-500">{errors.email.message}</span>}
        </div>
        <div className="flex flex-col">
          <input
            {...register("website")}
            placeholder="Website"
            className="border-b focus:outline-none py-2 placeholder:text-[#6D809C]"
          />
        </div>
      </div>

      
        <div className="flex-1">
          <textarea
            {...register("message")}
            placeholder="Message"
            rows={12}
            className="bg-[#f8f8f8] p-4 rounded-xl w-full resize-none placeholder:text-[#6D809C]"
          />
          {errors.message && <span className="text-sm text-red-500">{errors.message.message}</span>}
        </div>
        </div>

    
      <div className="flex flex-col  ">
        <div className="mt-4 flex justify-center">
          <label className="flex items-center">
            <input type="checkbox" {...register("agree")} className="mr-2" />
            <span>
              I agree to the <span className="font-bold">Privacy Notice</span>
            </span>
          </label>
          {errors.agree && <p className="text-sm text-red-500">{errors.agree.message}</p>}
        </div>

        <Button
        size={"default"}
          type="submit"
          className="mt-6 bg-[#E74529] text-white  px-6 py-2 rounded-xl hover:bg-[#d4381f] lg:w-[16%] mx-auto"
        >
          Send Message
        </Button>
        </div>
    </form>

    <div className="mt-16 grid grid-cols-1 justify-items-center gap-2 text-left text-sm text-[#263244]">
        <div className="flex  lg:gap-16 justify-center items-center">
          <p>For any customers inquiries call our toll-free number</p>
          <div className="text-[#E74529] font-bold flex item-center gap-2">
            <Phone className="text-[#263244]" size={18}/> 8001244410
          </div>
        </div>
        <div className="flex  lg:gap-[92px] justify-center items-center">
          <p>If you are calling from outside Saudi Arabia</p>
          <div className="text-[#E74529] font-bold flex item-center gap-2">
            <Globe className="text-[#263244]" size={18}/> +966920024360
          </div>
        </div>
      </div>

    </section>
  )
}
