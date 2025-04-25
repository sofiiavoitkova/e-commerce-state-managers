import { RootState } from "../store/store";

export const selectIsSidebarOpen = (state: RootState) => state.sidebar.isOpen;