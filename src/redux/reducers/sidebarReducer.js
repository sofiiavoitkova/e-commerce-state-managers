import { SET_SIDEBAR_OPEN, CLOSE_SIDEBAR } from "../constants/actionTypes";

const initialState = {
  isOpen: false,
};

const sidebarReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SIDEBAR_OPEN:
      return {
        ...state,
        isOpen: action.payload,
      };
    case CLOSE_SIDEBAR:
      return {
        ...state,
        isOpen: false,
      };
    default:
      return state;
  }
};

export default sidebarReducer;
