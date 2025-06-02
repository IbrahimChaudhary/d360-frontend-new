'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useCallback } from 'react';
import { useStore } from '@/store/toggle-store'

export function LanguageSwitcher() {
  const { language, toggleLanguage } = useStore(); 

  const handleToggle = useCallback(() => {
    toggleLanguage();
  }, [toggleLanguage]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <Button
        variant="default"
        onClick={handleToggle}
        className="font-semibold text-[26px] bg-none"
        aria-label={language === 'en' ? 'Switch to Arabic' : 'Switch to English'}
      >
        {language === 'en' ? 'عربي' : 'English'}
      </Button>
    </motion.div>
  );
}