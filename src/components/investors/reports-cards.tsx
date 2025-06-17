"use client"

interface InfoCard {
  title1: string
  title2?: string
  description: string
}

interface ReportCard {
  year: string
  downloadUrl?: string
}

interface DynamicInfoSectionProps {
  title?: string
  type: "info" | "reports"
  infoCards?: InfoCard[]
  reportCards?: ReportCard[]
  className?: string
}

export default function DynamicInfoSection({
  title,
  type,
  infoCards = [],
  reportCards = [],
  className = "",
}: DynamicInfoSectionProps) {
  const defaultInfoCards: InfoCard[] = [
    {
      title1: "Financial",
      title2: "Reports",
      description: "Latest financial results and analysis.",
    },
    {
      title1: "Stock",
      title2: "Price",
      description: "Real-time stock performance updates.",
    },
    {
      title1: "Corporate",
      title2: "Governance",
      description: "Our principles for transparency and accountability.",
    },
    {
      title1: "Official",
      title2: "Announcements",
      description: "Key updates that matter to our investors.",
    },
  ]

  const defaultReportCards: ReportCard[] = [
    { year: "2024" },
    { year: "2023" },
    { year: "2022" },
    { year: "2021" },
    { year: "2020" },
    { year: "2019" },
    { year: "2018" },
    { year: "2017" },
    { year: "2016" },
    { year: "2015" },
    { year: "2014" },
    { year: "2013" },
  ]

  const cardsToRender =
    type === "info"
      ? infoCards.length > 0
        ? infoCards
        : defaultInfoCards
      : reportCards.length > 0
        ? reportCards
        : defaultReportCards

  const gridCols =
    type === "info" ? "grid-cols-2 sm:grid-cols-2 lg:grid-cols-4" : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"

  const cardHeight = type === "info" ? "h-[263px] lg:h-90" : "h-60 lg:h-90"

  return (
    <section className={`py-12 md:py-16 bg-white ${className}`}>
      <div className="lg:max-w-5xl mx-auto px-4">
        <h2 className="text-center  text-[25px] lg:text-[60px] text-[#263244] mb-8 md:mb-10">{title}</h2>

        <div className={`grid ${gridCols} gap-4`}>
          {type === "info" &&
            (cardsToRender as InfoCard[]).map((card, index) => (
              <div key={index} className={`bg-[#E74529] rounded-3xl p-3 lg:p-6 text-white flex flex-col ${cardHeight}`}>
                <h3 className="lg:text-[27px] text-[18px] font-bold mb-6">
                  {card.title1} {card.title2 && <br />} {card.title2}
                </h3>
                <p className="lg:text-[20px] text-[12px] mt-auto lg:w-full w-[65%]">{card.description}</p>
              </div>
            ))}

          {type === "reports" &&
            (cardsToRender as ReportCard[]).map((card, index) => (
              <div
                key={index}
                className={`bg-[#F6F7F8] rounded-2xl p-4 lg:p-3 flex flex-col justify-between ${cardHeight}`}
              >
                <div className="text-left rtl:text-right">
                  <div className="text-3xl lg:text-[80px] font-extrabold text-[#263244] mb-2">{card.year.slice(0, 2)}</div>
                  <div className="text-3xl lg:text-[80px] font-extrabold text-[#263244]">{card.year.slice(2)}</div>
                </div>
                <button
                  className="bg-[#E74529] hover:bg-[#d63d1e] text-white text-[8px] lg:text-sm font-bold px-4 py-3 rounded-lg transition-colors duration-200 mt-4"
                  onClick={() => {
                    if (card.downloadUrl) {
                      window.open(card.downloadUrl, "_blank")
                    } else {
                      console.log(`Download report for ${card.year}`)
                    }
                  }}
                >
                  Download Report
                </button>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}
