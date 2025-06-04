'use client'

import { useEffect, useState } from 'react'
import { useStore } from '@/store/toggle-store'

export default function FontSwitcher({ children }: { children: React.ReactNode }) {
  const { language } = useStore()
  const [fontClass, setFontClass] = useState('')

  useEffect(() => {
    const selectedFont = language === 'ar' ? 'var(--font-tajawal)' : 'var(--font-lato)'
    document.body.style.fontFamily = selectedFont

    // Optionally update lang & dir attributes too
    document.documentElement.lang = language
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
  }, [language])

  return <>{children}</>
}
