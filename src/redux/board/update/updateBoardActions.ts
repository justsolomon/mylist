import {
  UPDATE_BOARD_FAILURE,
  UPDATE_BOARD_REQUEST,
  UPDATE_BOARD_SUCCESS,
} from "./updateBoardTypes";

export const updateBoardRequest = () => {
  return {
    type: UPDATE_BOARD_REQUEST,
  };
};

export const updateBoardSuccess = (data: any) => {
  return {
    type: UPDATE_BOARD_SUCCESS,
    payload: data,
  };
};

export const updateBoardFailure = (error: string) => {
  return {
    type: UPDATE_BOARD_FAILURE,
    payload: error,
  };
};
