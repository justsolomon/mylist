import {
  INVITE_REQUEST,
  SEND_INVITE_SUCCESS,
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

export const inviteRequest = () => {
  return {
    type: INVITE_REQUEST,
  };
};

export const sendInviteSuccess = (successMessage: string) => {
  return {
    type: SEND_INVITE_SUCCESS,
    payload: successMessage,
  };
};
