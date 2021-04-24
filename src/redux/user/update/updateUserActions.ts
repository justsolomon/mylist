import {
  UPDATE_USER_FAILURE,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
} from "./updateUserTypes";

export const updateUserRequest = () => {
  return {
    type: UPDATE_USER_REQUEST,
  };
};

export const updateUserSuccess = (data: any) => {
  return {
    type: UPDATE_USER_SUCCESS,
    payload: data,
  };
};

export const updateUserFailure = (error: string) => {
  return {
    type: UPDATE_USER_FAILURE,
    payload: error,
  };
};
