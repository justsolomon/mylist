import {
  SIGNUP_USER_FAILURE,
  SIGNUP_USER_REQUEST,
  SIGNUP_USER_SUCCESS,
} from "./signupTypes";

export const signupUserRequest = () => {
  return {
    type: SIGNUP_USER_REQUEST,
  };
};

export const signupUserSuccess = (data: any) => {
  return {
    type: SIGNUP_USER_SUCCESS,
    payload: data,
  };
};

export const signupUserFailure = (error: string) => {
  return {
    type: SIGNUP_USER_FAILURE,
    payload: error,
  };
};
