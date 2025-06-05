// store/useStore.ts
import { create } from 'zustand';

type Language = 'en' | 'ar';

type State = {
  language: Language;
};

type Actions = {
  toggleLanguage: () => void;
};

export const useStore = create<State & Actions>((set) => ({
  language: 'en',
  toggleLanguage: () =>
    set((state) => ({
      language: state.language === 'en' ? 'ar' : 'en',
    })),
}));