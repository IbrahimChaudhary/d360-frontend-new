import type { TeamData, BoardMember, ShariahMember, ExecutiveMember } from "../types/team"
import type { TeamMemberUnion } from "../types/team"

export const boardMembers: BoardMember[] = [
  {
    id: "taha-alkuwaiz",
    name: "Taha Al Kuwaiz",
    position: "Chairman",
    category: "board",
    boardRole: "chairman",
    biography:
      "In addition to being the Chairman of the Board at D360 Bank, Mr. AlKuwaiz is currently the Chairman of the Board of Derayah Financial Company, where he played a pivotal role in establishing the company. He has held various senior positions including Chairman of Bank AlJazira, Chairman of the Saudi Stock Exchange (Tadawul) and Vice Chairman of STC. He was also the Deputy CEO of NCB, and a former Director of Banking Technology at SAMA.",
    education: [
      {
        degree: "Bachelor's degree",
        institution: "King Fahd University of Petroleum & Minerals",
        field: "Computer Science",
      },
    ],
    currentPositions: {
      chairman: [{ title: "Chairman", company: "Derayah Financial" }],
      boardMember: [{ title: "Board Member", company: "Olayan Holding" }],
    },
    experience: ["Extensive work experience in the financial services sector"],
  },
  {
    id: "zaki-alshowaier",
    name: "Zaki Alshowaier",
    position: "Vice Chairman",
    category: "board",
    boardRole: "vice-chairman",
    biography:
      "Mr. Zaki has extensive experience in the financial, industrial, and real estate sectors, he is currently the Vice Chairman and Managing Director at Alshowaier Investment and Real Estate Development Company. He serves on the boards of several companies, including Derayah Financial and Alamar foods.",
    currentPositions: {
      chairman: [
        { title: "Chairman", company: "Vision Development Company (Bahrain)" },
        { title: "Chairman", company: "Tsweegar Real Estate Company" },
      ],
      viceChairman: [{ title: "Vice Chairman", company: "MD, AlShowaier company" }],
      boardMember: [
        { title: "Board Member", company: "Derayah Financial" },
        { title: "Board Member", company: "Akwan Real Estate" },
        { title: "Board Member", company: "Al Amar Food" },
      ],
    },
  },
  {
    id: "ibrahim-aljammaz",
    name: "Ibrahim Al Jammaz",
    position: "Board Member",
    category: "board",
    boardRole: "member",
    biography:
      "Mr. AlJammaz has extensive experience in the retail, industrial and investment sectors, he is currently the Chairman of Abdulaziz AlJammaz & Brothers. He serves on the boards of several companies, including Alamar Foods and Derayah Financial Company.",
    education: [
      {
        degree: "Bachelor's degree",
        institution: "King Saud University",
        field: "Industrial Engineering",
      },
    ],
    currentPositions: {
      chairman: [
        { title: "Chairman", company: "Al Amar Food" },
        { title: "Chairman", company: "Abdulaziz Ibrahim AlJammaz & Brothers Company" },
        { title: "Chairman", company: 'Saudi Allied Company for Chocolate & Gift "Patchi"' },
        { title: "Chairman", company: "Ayar Internation Contracting Company (AICC)" },
      ],
      viceChairman: [{ title: "Vice Chairman", company: "Derayah Financial" }],
      boardMember: [
        { title: "Board Member", company: 'Himaat AlRiyadah "Endeavor Saudi Arabia"' },
        { title: "Board Member", company: "Cedrus Invest Bank" },
        { title: "Board Member", company: "Olaya Real Estate and Commercial Investment Company" },
        { title: "Board Member", company: "Sovana Cayman Islands" },
        { title: "Board Member", company: 'Premium Choco Gift "Patchi"' },
        { title: "Board Member", company: "Benchmark Saudi Arabia Company" },
        { title: "Board Member", company: "Dr. Sulaiman AlHabib Medical Group (HMG)" },
      ],
    },
  },
  {
    id: "bassem-alsallom",
    name: "Bassem Al Sallom",
    position: "Board Member",
    category: "board",
    boardRole: "member",
    biography:
      "Mr. AlSallom has extensive experience in the public and private sectors. Until the end of 2023, he was the Managing Director of Sure Global Technology Company. Currently, he is the CEO of Solutions Valley (Wadi AlHoloul).",
    education: [
      {
        degree: "Master's degree",
        institution: "University of Kent",
        field: "IT Consultancy",
      },
    ],
    currentPositions: {
      ceo: [
        { title: "CEO", company: "Solutions Valley", endDate: "January 2024" },
        { title: "MD", company: "SURE Global Technology", endDate: "Dec 2023" },
      ],
      chairman: [
        { title: "Chairman", company: "BAS Investments" },
        { title: "Chairman", company: "Bayt Alnomu Capital Company", endDate: "Jun 2024" },
        { title: "Chairman", company: "Eyewaa Alarab Tousim" },
      ],
      viceChairman: [
        {
          title: "Vice Chairman",
          company: "National Committee for ICT, Council of Saudi Chambers",
          endDate: "Jun 2024",
        },
      ],
      boardMember: [
        { title: "Advisory Committee member", company: "CMA" },
        { title: "Board Member", company: "SURE Global Technology Company" },
        { title: "Board Member", company: "Sirar by STC" },
        { title: "Board Member", company: "Tree Insurance" },
        { title: "Board Member", company: "ICT Committee SME Bank" },
        { title: "Board Member", company: "Safqah Capital", endDate: "Jan 2025" },
      ],
    },
  },
  {
    id: "nouf-aljoaid",
    name: "Nouf AlJoaid",
    position: "Board Member",
    category: "board",
    boardRole: "member",
    biography:
      "Ms. AlJoaid has extensive experience in the legal field. She worked as Head of Finance Legal Advisory Department at the Public Investment Fund and prior to that Ms. Nouf worked as a corporate and commercial attorney in an international law firm in Riyadh.",
    education: [
      {
        degree: "Bachelor's degree",
        institution: "Prince Sultan University",
        field: "Law",
      },
      {
        degree: "Master's degree (LLM)",
        institution: "Boston University",
        field: "Banking & Financial Law",
      },
    ],
  },
  {
    id: "fahad-aljomaih",
    name: "Fahad AlJomaih",
    position: "Board Member",
    category: "board",
    boardRole: "member",
    biography:
      "Mr. AlJomaih has extensive experience in the financial services field. He is currently a Director at the Public Investment Fund.",
    education: [
      {
        degree: "Bachelor's degree",
        institution: "Northeastern University",
        field: "Business Administration",
      },
      {
        degree: "Master's degree",
        institution: "University of Reading",
        field: "International Securities, Investments and Banking",
      },
      {
        degree: "MBA",
        institution: "University of Portsmouth",
      },
    ],
    currentPositions: {
      boardMember: [
        { title: "Board Member", company: "Saudi Reinsurance Company" },
        { title: "Audit Committee member", company: "Yanbu Cement" },
        { title: "Investment Committee member", company: "Saudi Tadawul Group" },
        { title: "Nomination and Remuneration Committee member", company: "ALAT Technologies" },
      ],
    },
  },
  {
    id: "tim-brooke",
    name: "Tim Brooke",
    position: "Board Member",
    category: "board",
    boardRole: "member",
    biography:
      "Mr. Thom has extensive experience in financial services, tech start-ups, and non-financial services businesses. His career spanned executive roles with JPMorgan & PwC. He has held several Board roles in internationally listed entities, as well as chairing a number of high-growth disruptor businesses.",
    education: [
      {
        degree: "Bachelor's degree",
        institution: "Kingston University",
        field: "Business",
      },
    ],
    currentPositions: {
      chairman: [
        { title: "Chairman", company: "Lunar Group" },
        { title: "Chairman", company: "Butterfield Mortgages Limited", endDate: "May 2024" },
        { title: "Chairman", company: "Landfin Limited" },
      ],
      boardMember: [
        { title: "Board Member", company: "XYB" },
        { title: "Board Member", company: "WAC limited" },
        { title: "Board Member", company: "Valiamo Limited" },
        { title: "Board Member", company: "OneDome Limited" },
      ],
    },
  },
  {
    id: "mudassir-sheikha",
    name: "Mudassir Sheikha",
    position: "Board Member",
    category: "board",
    boardRole: "member",
    biography:
      "Mr. Sheikha has extensive experience in technology & start-ups. He is currently the co-founder and CEO of Careem, the leading technology platform for the region. Prior to that, he was an Associate Partner at McKinsey & Company.",
    education: [
      {
        degree: "Dual degrees",
        institution: "University of Southern California",
        field: "Economics and Computer Science",
      },
      {
        degree: "Master's degree",
        institution: "Stanford University",
        field: "Computer Science with specialization in Databases",
      },
    ],
    currentPositions: {
      chairman: [{ title: "Chairman", company: "Endeavor Pakistan" }],
      boardMember: [
        { title: "Board Member", company: "SRTIP" },
        { title: "Board Member", company: "Dubai Chambers of Digital Economy" },
        { title: "Board Member", company: "Careem Technologies" },
      ],
    },
  },
  {
    id: "faraz-khalid",
    name: "Faraz Khalid",
    position: "Board Member",
    category: "board",
    boardRole: "member",
    biography:
      "Mr. Khalid is the CEO of noon, the region's leading consumer commerce platform. With extensive experience in tech and e-commerce, he has driven noon's expansion into food delivery, quick-commerce, fintech, and fashion. An engineer with an MBA from Wharton, he previously co-founded and led Namshi.",
    education: [
      {
        degree: "Engineering degree",
        institution: "Not specified",
      },
      {
        degree: "MBA",
        institution: "Wharton",
      },
    ],
    currentPositions: {
      member: [
        { title: "Member", company: "Alwaha Duty Company" },
        { title: "Member", company: "Aviation Services Company" },
      ],
    },
  },
]

export const shariahMembers: ShariahMember[] = [
  {
    id: "mohamed-algari",
    name: "Dr Mohamed Ali AlGari",
    position: "Shariah Committee Member",
    category: "shariah",
    biography:
      "Dr. Mohamed holds a bachelor's degree in Economics and Management from King Abdulaziz University in Jeddah, and both a master's and Ph.D. degree in Economics from the University of California, USA. Dr. Mohamed serves as a Member of the Shariah Council of AAOIFI. Chairman of several shariah boards including IsDB Group, Standard & Poor, IILM and others. He is an advisor to several global Islamic financial institutions and is an expert at the Fiqh Academy affiliated with the Organization of Islamic Cooperation in Jeddah.",
    education: [
      {
        degree: "Bachelor's degree",
        institution: "King Abdulaziz University",
        field: "Economics and Management",
      },
      {
        degree: "Master's degree",
        institution: "University of California, USA",
        field: "Economics",
      },
      {
        degree: "Ph.D.",
        institution: "University of California, USA",
        field: "Economics",
      },
    ],
    specialization: ["Islamic Economics", "Islamic Banking", "Shariah Compliance"],
  },
  {
    id: "khalid-alsaiari",
    name: "Dr Khalid Mohammed AlSaiari",
    position: "Shariah Committee Member",
    category: "shariah",
    biography:
      "Dr. Khaled is a graduate of the Institute of Higher Judiciary in Riyadh, where he obtained a Master's and Ph.D. degree in Comparative Jurisprudence. He is an Associate Professor at the Saudi Electronic University and has previously worked as a practitioner in several banks and financial institutions, specializing in Shariah and legal consultations and the development of Islamic products.",
    education: [
      {
        degree: "Master's degree",
        institution: "Institute of Higher Judiciary in Riyadh",
        field: "Comparative Jurisprudence",
      },
      {
        degree: "Ph.D.",
        institution: "Institute of Higher Judiciary in Riyadh",
        field: "Comparative Jurisprudence",
      },
    ],
    specialization: ["Comparative Jurisprudence", "Islamic Product Development", "Shariah Consultations"],
  },
  {
    id: "bilqasim-alzubaidi",
    name: "Dr Bilqasim Dhker Alzubaidi",
    position: "Shariah Committee Member",
    category: "shariah",
    biography:
      "Dr. Bilqasim is a professor of Islamic Commercial Jurisprudence at King Abdulaziz University. He holds a Ph.D. in Jurisprudence and its Principles from Umm Al-Qura University. He is a member of the Shariah committee in several financial institutions and has presented numerous research papers in specialized conferences and seminars in the Islamic financial industry",
    education: [
      {
        degree: "Ph.D.",
        institution: "Umm Al-Qura University",
        field: "Jurisprudence and its Principles",
      },
    ],
    specialization: [
      "Islamic Commercial Jurisprudence",
      "Shariah-compliant Financial Products",
      "Islamic Finance Research",
    ],
  },
]

export const executiveMembers: ExecutiveMember[] = [
  {
    id: "ezequiel-szafir",
    name: "Ezequiel Szafir",
    position: "Chief Executive Officer",
    category: "executive",
    department: "Executive Leadership",
    biography:
      "Dr. Szafir is the CEO of D360 Bank. He previously led Openbank and Santander Consumer Bank, overseeing global operations and a $150B+ balance sheet. He also held executive roles at Amazon Europe, Liberty Global, and McKinsey. Ezequiel holds a PhD from Tilburg University, an MSc from Boston College, and a BSc from UADE. He was also a Research Fellow at MIT.",
    education: [
      {
        degree: "Ph.D.",
        institution: "Tilburg University",
      },
      {
        degree: "MSc",
        institution: "ADL School of Management at Boston College",
      },
      {
        degree: "BSc",
        institution: "UADE Engineering University",
      },
    ],
    experience: [
      "CEO of Openbank (Santander Group)",
      "CEO of Santander Consumer Bank",
      "Vice President and Board Member at Amazon Europe",
      "Leadership roles at Liberty Global, McKinsey & Co., and Nike",
      "Partner in Transaction Services practice of Deloitte",
      "Research Fellow at MIT",
    ],
  },
  {
    id: "faisal-aljaddan",
    name: "Faisal Aljaddan",
    position: "Chief Business Officer",
    category: "executive",
    department: "Business Strategy",
    isFoundingMember: true,
    yearsOfExperience: 10,
    biography:
      "Faisal is a founding member of D360 Bank and leads strategy across Retail, BaaS, and SME. He previously worked at McKinsey & Co, advising regional banks on transformation. Faisal holds a degree in Industrial Engineering from Alfaisal University, graduating with highest distinction",
    education: [
      {
        degree: "Industrial Engineering",
        institution: "Alfaisal University",
      },
    ],
  },
  {
    id: "mohammed-alkhomashi",
    name: "Mohammed Alkhomashi",
    position: "Chief Compliance Officer",
    category: "executive",
    department: "Compliance",
    yearsOfExperience: 19,
    biography:
      "Mohammed leads Compliance and Financial Crimes at D360 Bank. He previously worked at SAMA for over a decade, and held leadership roles at Banque Saudi Fransi and Aljazira Bank. Mohammed holds a Master’s in Strategic Information Systems from the University of East Anglia",
    education: [
      {
        degree: "Master's Degree",
        institution: "Norwich Business School – University of East Anglia",
        field: "Strategic Information Systems",
      },
    ],
  },
  {
    id: "ayman-alhabib",
    name: "Ayman Alhabib",
    position: "Chief Risk Officer",
    category: "executive",
    department: "Risk Management",
    isFoundingMember: true,
    biography:
      "Ayman is a founding member of D360 Bank, overseeing the Bank’s risk strategy. He was Chief Risk Officer at Emkan Finance and held senior roles at Al Rajhi Bank. Ayman holds a bachelor’s degree in MIS from KFUPM and an MBA from King Saud University, where he graduated top of his class",
    education: [
      {
        degree: "Bachelor's degree",
        institution: "King Fahd University of Petroleum and Minerals (KFUPM)",
        field: "Management Information Systems",
      },
      {
        degree: "MBA",
        institution: "King Saud University",
      },
    ],
  },
  {
    id: "ale-delavina",
    name: "Ale de la Viña",
    position: "Chief Technology Officer",
    category: "executive",
    department: "Technology",
    biography:
      "Ale is CTO of D360 Bank, specializing in digital banking platforms and cloud-native architecture. He has led technology functions in banking, streaming, and consulting across complex environments. Ale studied Systems Engineering and has deep expertise in big data and microservices.",
  },
  {
    id: "rayan-alturki",
    name: "Rayan Alturki",
    position: "Chief Commercial Officer",
    category: "executive",
    department: "Commercial",
    yearsOfExperience: 19,
    biography:
      "Rayan leads marketing, growth, and partnerships at D360 Bank. He was formerly CCO of Zain KSA, where he led marketing, corporate communications, branding, investor relations. Rayan is a graduate of Harvard Business School and the Misk 2030 Leaders Program, and holds a bachelor’s in Computer Science and an MBA",
    education: [
      {
        degree: "Bachelor's degree",
        institution: "Not specified",
        field: "Computer Science",
      },
      {
        degree: "MBA",
        institution: "Not specified",
      },
    ],
  },
  {
    id: "sadeq-althawab",
    name: "Sadeq Jafar AlThawab",
    position: "Chief Operation Officer",
    category: "executive",
    department: "Operations",
    yearsOfExperience: 24,
    biography:
      "Sadeq oversees Operations and EPMO at D360 Bank. He previously led consumer assets at BSF and worked with ANB, Visa, NCB, and SAB. Sadeq holds a B.S. in Marketing from KFUPM, a digital business diploma from Columbia, and completed the CTO program at UC Berkeley.",
    education: [
      {
        degree: "B.S.",
        institution: "KFUPM",
        field: "Marketing",
      },
      {
        degree: "Post graduate diploma",
        institution: "Columbia Business School",
        field: "Digital Business Leadership",
      },
    ],
  },
  {
    id: "akram-alahmadi",
    name: "Akram AlAhmadi",
    position: "Chief Human Resources Officer",
    category: "executive",
    department: "Human Resources",
    biography:
      "Akram leads corporate strategy and talent at D360 Bank. He held senior roles at P&G, Bupa Arabia, and Mobily, and is a board member and NRC advisor. Akram holds a bachelor’s in Psychology from King AbdulAziz University and an MBA from the University of Wisconsin.",
    education: [
      {
        degree: "MBA",
        institution: "University of Wisconsin",
      },
      {
        degree: "Bachelor's degree",
        institution: "King AbdulAziz University",
        field: "Psychology",
      },
    ],
  },
  {
    id: "nouf-alyousef",
    name: "Nouf Faisal AlYousef",
    position: "Executive Director – Internal Audit",
    category: "executive",
    department: "Internal Audit",
    yearsOfExperience: 16,
    biography:
      "Nouf oversees Internal Audit at D360 Bank, with 16+ years of experience in governance, risk, and cybersecurity. She holds a BS in Computer Information Systems from Prince Sultan University and an MBA from the University of Manchester, along with 10 professional certifications.",
    education: [
      {
        degree: "B.S",
        institution: "Prince Sultan University",
        field: "Computer Information Systems",
      },
      {
        degree: "MBA",
        institution: "University of Manchester",
      },
    ],
  },
  {
    id: "feras-altowaijri",
    name: "Feras Abdullah Al-Towaijri",
    position: "Executive Director – Treasury & Investment",
    category: "executive",
    department: "Treasury & Investment",
    yearsOfExperience: 15,
    biography:
      "Feras is an experienced finance and treasury professional with over 15 years of experience in treasury management, investment strategy, and financial leadership across prominent organizations in Saudi Arabia and internationally. Currently he is serving as the Head of Treasury and Investment at D360 Bank.",
    education: [
      {
        degree: "Bachelor of Science",
        institution: "King Saud University",
        field: "Finance",
      },
      {
        degree: "Master of Financial Services",
        institution: "UK",
      },
    ],
  },
  {
    id: "mohammed-nazer",
    name: "Mohammed Nazer",
    position: "Chief Financial Officer (Current)",
    category: "executive",
    department: "Finance",
    biography:
      "Mohammed oversees Finance at D360 Bank. He was CFO & CIO at SRMG and held roles at Goldman Sachs, J.P. Morgan, and Barclays. He serves on several company boards. Mohammed holds an MBA from The Wharton School and a bachelor’s degree from New York University.",
    education: [
      {
        degree: "MBA",
        institution: "The Wharton School at the University of Pennsylvania",
      },
      {
        degree: "Undergraduate degree",
        institution: "New York University",
      },
    ],
  },
//   {
//     id: "abdulelah-alharoura",
//     name: "Abdulelah AlHaroura",
//     position: "Chief Financial Officer (Previous)",
//     category: "executive",
//     department: "Finance",
//     yearsOfExperience: 25,
//     biography:
//       "Abdulelah Alharoura is one of D360 Bank's establishment team who was appointed as CFO in March 1, 2021 along with handling the treasury department until December 2023.",
//     education: [
//       {
//         degree: "MBA & MSF",
//         institution: "Northeastern University, Boston, USA",
//       },
//       {
//         degree: "Bachelor's degree",
//         institution: "KFUPM",
//         field: "Chemical Engineering",
//       },
//       {
//         degree: "Diploma",
//         institution: "ACCA UK",
//         field: "IFRS",
//       },
//     ],
//   },
]

export const teamData: TeamData = {
  boardMembers,
  shariahMembers,
  executiveMembers,
}

// Helper functions
export const getAllTeamMembers = (): TeamMemberUnion[] => {
  return [...boardMembers, ...shariahMembers, ...executiveMembers]
}

export const getTeamMemberById = (id: string): TeamMemberUnion | undefined => {
  return getAllTeamMembers().find((member) => member.id === id)
}

export const getTeamMembersByCategory = (category: "board" | "shariah" | "executive"): TeamMemberUnion[] => {
  return getAllTeamMembers().filter((member) => member.category === category)
}

export const getFoundingMembers = (): ExecutiveMember[] => {
  return executiveMembers.filter((member) => member.isFoundingMember)
}
