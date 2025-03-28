import { create } from "zustand";

export const useSidebarStore = create((set) => ({
  isOpen: false,
  setIsOpen: (val) => set({ isOpen: val }),
  handleClose: () => set({ isOpen: false }),
}));
