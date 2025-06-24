// store/useStore.ts
import { create } from 'zustand';

type Language = 'en' | 'ar';

type State = {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
};

export const useStore = create<State>((set) => ({
  language: 'en',
  setLanguage: (lang) => set({ language: lang }),
  toggleLanguage: () =>
    set((state) => ({
      language: state.language === 'en' ? 'ar' : 'en',
    })),
}));
