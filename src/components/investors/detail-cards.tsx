import Image from "next/image"

const cardData = [
  {
    title: "Reliable Financial Performance",
    description: "Stay updated with our quarterly and annual reports for a clear financial outlook.",
    image: "/investor/card1.png",
    textColor: "text-white",
  },
  {
    title: "Sustainable Growth",
    description: "We operate with a forward-thinking strategy focused on innovation and long-term success.",
    image: "/investor/card2.png",
    textColor: "text-white",
  },
  {
    title: "Commitment to Governance",
    description: "We adhere to the highest standards of transparency to ensure a fair investment environment.",
    image: "/investor/card3.png",
    textColor: "text-white",
  },
  {
    title: "Latest News & Updates",
    description: "Get real-time insights into our performance and strategic direction.",
    image: "/investor/card4.png",
    textColor: "text-white",
  },
]

export default function InfoCards() {
  return (
    <section className=" lg:py-16 ">
      <div className="lg:max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl w-full h-80 lg:w-[460px] group cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={card.image || "/placeholder.svg"}
                  alt={card.title}
                  fill
                  className="object-cover opacity-80 shadow-2xl transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Dark Overlay for better text readability */}
              <div className="absolute inset-0 bg-black/50" />

              {/* Content */}
              <div className="relative h-full flex flex-col  p-6">
                <div className="space-y-3">
                  <h3 className={`text-[16px] lg:w-full w-[55%] md:text-[40px] font-extrabold ${card.textColor} leading-tight`}>{card.title}</h3>
                  <p className={`${card.textColor} text-sm md:text-[25px]  `}>
                    {card.description}
                  </p>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
