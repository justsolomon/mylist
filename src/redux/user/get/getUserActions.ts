import {
  GET_USER_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
} from "./getUserTypes";

export const getUserRequest = () => {
  return {
    type: GET_USER_REQUEST,
  };
};

export const getUserSuccess = (data: any) => {
  return {
    type: GET_USER_SUCCESS,
    payload: data,
  };
};

export const getUserFailure = (error: string) => {
  return {
    type: GET_USER_FAILURE,
    payload: error,
  };
};
