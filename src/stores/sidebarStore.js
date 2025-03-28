import { create } from "zustand";
import { createSelectors } from "../utils/createSelectors";

const baseSidebarStore = create((set) => ({
  isOpen: false,
  setIsOpen: (val) => set({ isOpen: val }),
  handleClose: () => set({ isOpen: false }),
}));

export const useSidebarStore = createSelectors(baseSidebarStore);
