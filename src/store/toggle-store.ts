import { create } from 'zustand';

type Language = 'en' | 'ar';

type State = {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  syncFromUrl: (urlLocale: Language) => void;
};

const getInitialLang = (): Language => {
  if (typeof window !== 'undefined') {
    return (localStorage.getItem('lang') as Language) || 'en';
  }
  return 'en';
};

export const useStore = create<State>((set) => ({
  language: getInitialLang(),
  setLanguage: (lang) => {
    console.log("Toggle store: Setting language to:", lang);
    
    localStorage.setItem('lang', lang);
    set({ language: lang });
  },
  toggleLanguage: () => {
    set((state) => {
      const newLang = state.language === 'en' ? 'ar' : 'en';
      console.log("Toggle store: Toggling language to:", newLang);
      localStorage.setItem('lang', newLang);
      return { language: newLang };
    });
  },
  syncFromUrl: (urlLocale) => {
    console.log("Toggle store: Syncing from URL locale:", urlLocale);
    localStorage.setItem('lang', urlLocale);
    set({ language: urlLocale });
  },
}));
