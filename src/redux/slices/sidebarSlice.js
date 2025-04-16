import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    setSidebarOpen(state, action) {
      state.isOpen = action.payload;
    },
    closeSidebar(state) {
      state.isOpen = false;
    },
  },
});

export const { setSidebarOpen, closeSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;
