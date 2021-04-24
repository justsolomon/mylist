import {
  LOGIN_USER_FAILURE,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
} from "./loginTypes";

export const loginUserRequest = () => {
  return {
    type: LOGIN_USER_REQUEST,
  };
};

export const loginUserSuccess = (data: any) => {
  return {
    type: LOGIN_USER_SUCCESS,
    payload: data,
  };
};

export const loginUserFailure = (error: string) => {
  return {
    type: LOGIN_USER_FAILURE,
    payload: error,
  };
};
