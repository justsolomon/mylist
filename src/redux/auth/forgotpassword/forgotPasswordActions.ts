import {
  FORGOT_PASSWORD_FAILURE,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
} from "./forgotPasswordTypes";

export const forgotPasswordRequest = () => {
  return {
    type: FORGOT_PASSWORD_REQUEST,
  };
};

export const forgotPasswordSuccess = (data: any) => {
  return {
    type: FORGOT_PASSWORD_SUCCESS,
    payload: data,
  };
};

export const forgotPasswordFailure = (error: string) => {
  return {
    type: FORGOT_PASSWORD_FAILURE,
    payload: error,
  };
};
