import type React from "react"
export type Language = "en" | "ar"

export interface TranslatedText {
  en: string
  ar: string
}

export interface TeamMember {
  id: string
  name: TranslatedText
  title: TranslatedText
  image: string
}

export interface FAQ {
  id: string
  question: TranslatedText
  answer: TranslatedText
}

export interface HeroProps {
  title: TranslatedText
  description:string
  buttonText: TranslatedText
  imageAlt: string
}

export interface SectionProps {
  className?: string
  children: React.ReactNode
}


export type TeamMemberId =
  | "taha"
  | "talal"
  | "zaki"
  | "ibrahim"
  | "bassem"
  | "fahad"
  | "nouf"
  | "tim"
  | "mudassir"
  | "faraz"


  type LinkLabel = {
    en: string
    ar: string
  }
  
  export type FooterLink = {
    label: LinkLabel
    href: string
  }
  
  type SocialLink = {
    icon: React.ComponentType
    href: string
  }
  
  export type FooterContent = {
    aboutLinks: FooterLink[]
    contactLinks: FooterLink[]
    supportLinks: FooterLink[]
    socialLinks: SocialLink[]
    moneyTransferLinks: FooterLink[]
    exchangeRateLinks: FooterLink[]
    legalText: LinkLabel
  }