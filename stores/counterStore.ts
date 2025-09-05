// stores/counterStore.ts

import { create } from 'zustand';

type CounterStore = {
  count: number;
  increment: () => void;
  lang: string;
};

export const useCounterStore = create<CounterStore>()((set) => ({
  count: 0,
  lang: 'en',
  increment: () => set((state) => ({ count: state.count + 1 })),
  setLang: (lang: string) => set({ lang }),
}));