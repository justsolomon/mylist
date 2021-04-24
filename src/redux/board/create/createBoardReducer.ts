import {
  CREATE_BOARD_FAILURE,
  CREATE_BOARD_REQUEST,
  CREATE_BOARD_RESET,
  CREATE_BOARD_SUCCESS,
} from "./createBoardTypes";

const initialState = {
  loading: false,
  success: false,
  error: "",
  id: "",
};

const createBoardReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CREATE_BOARD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_BOARD_SUCCESS:
      return {
        ...initialState,
        id: action.payload,
        success: true,
      };
    case CREATE_BOARD_FAILURE:
      return {
        ...initialState,
        id: "",
        error: action.payload,
      };
    case CREATE_BOARD_RESET:
      return { ...state, success: false };
    default:
      return state;
  }
};

export default createBoardReducer;
