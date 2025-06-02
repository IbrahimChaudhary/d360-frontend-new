import enTranslations from '@/locales/en.json'
import arTranslations from '@/locales/ar.json'
import { useCallback } from 'react'
import { useLanguage } from '@/context/language-context'

// Define the structure of our translations
type NestedKeyOf<ObjectType extends object> = {
  [Key in keyof ObjectType & (string | number)]: ObjectType[Key] extends object
    ? `${Key}` | `${Key}.${NestedKeyOf<ObjectType[Key]>}`
    : `${Key}`
}[keyof ObjectType & (string | number)]

export type TranslationKey = NestedKeyOf<typeof enTranslations>

// Create a translations object with all available translations
const translations = {
  en: enTranslations,
  ar: arTranslations,
}

// Helper function to get a nested value from an object using a dot-notation string
function getNestedValue(obj: any, path: string): string {
  return path.split('.').reduce((prev, curr) => {
    return prev && prev[curr] ? prev[curr] : ''
  }, obj)
}

// Custom hook to use translations
export function useTranslations() {
  const { language } = useLanguage()
  
  const t = useCallback((key: TranslationKey): string => {
    return getNestedValue(translations[language], key)
  }, [language])
  
  return { t }
}
