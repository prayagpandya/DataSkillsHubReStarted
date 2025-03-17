import { create } from 'zustand';

export const useStates = create((set) => ({
  activeLink: '/',
  setActiveLink: (link) => set({ activeLink: link }),
}));
