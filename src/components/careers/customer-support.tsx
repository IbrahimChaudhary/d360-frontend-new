import { Link } from "lucide-react";

export default function CustomerSupport() {
    return (
      <section className="py-8 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-[25px] lg:text-[60px] font-extrabold text-[#293242] mb-6">Helping You Wherever You Are</h2>
  
          <p className="text-[#293242] text-[14px] md:text-[25px] mb-8 ">
            At <span className="font-bold">D360 Bank</span>, your voice matters. Whether you have a question,
            feedback, or even a complaint, we're always ready to listen and respond with transparency and efficiency.
          </p>
        <a href="/contact-us" className="bg-[#E74529] hover:bg-[#d63d1e] text-white text-[8px] lg:text-[20px] font-bold px-8 py-3 rounded-md lg:rounded-xl transition-colors duration-300">
         
            Contact US
          
          </a>
        </div>
      </section>
    )
  }
  