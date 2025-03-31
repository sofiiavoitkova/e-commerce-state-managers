import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useSidebarStore = create(
  devtools(
    (set) => ({
      isOpen: false,
      setIsOpen: (val) => set({ isOpen: val }),
      handleClose: () => set({ isOpen: false }),
    }),
    {
      name: "sidebar-store",
    }
  )
);
