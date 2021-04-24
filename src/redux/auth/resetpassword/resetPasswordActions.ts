import {
  RESET_PASSWORD_FAILURE,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
} from "./resetPasswordTypes";

export const resetPasswordRequest = () => {
  return {
    type: RESET_PASSWORD_REQUEST,
  };
};

export const resetPasswordSuccess = (data: any) => {
  return {
    type: RESET_PASSWORD_SUCCESS,
    payload: data,
  };
};

export const resetPasswordFailure = (error: string) => {
  return {
    type: RESET_PASSWORD_FAILURE,
    payload: error,
  };
};
