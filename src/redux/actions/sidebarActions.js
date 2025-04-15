import { SET_SIDEBAR_OPEN, CLOSE_SIDEBAR } from "../constants/sidebarActionTypes";

export const setSidebarOpen = (isOpen) => ({
  type: SET_SIDEBAR_OPEN,
  payload: isOpen,
});

export const closeSidebar = () => ({
  type: CLOSE_SIDEBAR,
});
