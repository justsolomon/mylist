import {
  GET_BOARD_FAILURE,
  GET_BOARD_REQUEST,
  GET_BOARD_SUCCESS,
} from "./getBoardTypes";

export const getBoardRequest = () => {
  return {
    type: GET_BOARD_REQUEST,
  };
};

export const getBoardSuccess = (data: any) => {
  return {
    type: GET_BOARD_SUCCESS,
    payload: data,
  };
};

export const getBoardFailure = (error: string) => {
  return {
    type: GET_BOARD_FAILURE,
    payload: error,
  };
};
