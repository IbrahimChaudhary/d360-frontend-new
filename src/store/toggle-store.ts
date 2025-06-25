import { create } from 'zustand';

type Language = 'en' | 'ar';

type State = {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
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
    console.log("i am in toogle store and 1st console", lang)
    
    localStorage.setItem('lang', lang);
    set({ language: lang });
  },
  toggleLanguage: () => {
    set((state) => {
      const newLang = state.language === 'en' ? 'ar' : 'en';
      console.log("i am in toogle store and 2nd console", newLang)
      localStorage.setItem('lang', newLang);
      return { language: newLang };
    });
  },
}));
