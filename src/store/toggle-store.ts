import { create } from 'zustand';

type Language = 'en' | 'ar';

type State = {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  syncFromUrl: (urlLocale: Language) => void;
  isInitialized: boolean;
};

const getInitialLang = (): Language => {
  if (typeof window !== 'undefined') {
    // Check if we're on a localized route and use that as the source of truth
    const pathname = window.location.pathname;
    const urlLocale = pathname.startsWith('/ar/') ? 'ar' : 'en';
    
    // If URL has a locale, use it; otherwise fall back to localStorage
    if (pathname.startsWith('/ar/') || pathname.startsWith('/en/')) {
      console.log("Store: Initializing from URL locale:", urlLocale);
      return urlLocale;
    }
    
    return (localStorage.getItem('lang') as Language) || 'en';
  }
  return 'en';
};

export const useStore = create<State>((set, get) => ({
  language: getInitialLang(),
  isInitialized: false,
  setLanguage: (lang) => {
    console.log("Toggle store: Setting language to:", lang);
    
    localStorage.setItem('lang', lang);
    set({ language: lang, isInitialized: true });
  },
  toggleLanguage: () => {
    set((state) => {
      const newLang = state.language === 'en' ? 'ar' : 'en';
      console.log("Toggle store: Toggling language to:", newLang);
      localStorage.setItem('lang', newLang);
      return { language: newLang, isInitialized: true };
    });
  },
  syncFromUrl: (urlLocale) => {
    console.log("Toggle store: Syncing from URL locale:", urlLocale);
    const currentLang = get().language;
    
    if (currentLang !== urlLocale) {
      localStorage.setItem('lang', urlLocale);
      set({ language: urlLocale, isInitialized: true });
      console.log("Toggle store: Updated language from", currentLang, "to", urlLocale);
    } else {
      console.log("Toggle store: Language already matches URL, no update needed");
    }
  },
}));
