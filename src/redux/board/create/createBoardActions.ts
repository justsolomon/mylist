import {
  CREATE_BOARD_FAILURE,
  CREATE_BOARD_REQUEST,
  CREATE_BOARD_RESET,
  CREATE_BOARD_SUCCESS,
} from "./createBoardTypes";

export const createBoardRequest = () => {
  return {
    type: CREATE_BOARD_REQUEST,
  };
};

export const createBoardSuccess = (id: string) => {
  return {
    type: CREATE_BOARD_SUCCESS,
    payload: id,
  };
};

export const createBoardFailure = (error: string) => {
  return {
    type: CREATE_BOARD_FAILURE,
    payload: error,
  };
};

export const createBoardReset = () => {
  return {
    type: CREATE_BOARD_RESET,
  };
};
