import {
  SEARCH_USERS_FAILURE,
  SEARCH_USERS_REQUEST,
  SEARCH_USERS_SUCCESS,
} from "./searchUsersTypes";

export const searchUsersRequest = () => {
  return {
    type: SEARCH_USERS_REQUEST,
  };
};

export const searchUsersSuccess = (data: any) => {
  return {
    type: SEARCH_USERS_SUCCESS,
    payload: data,
  };
};

export const searchUsersFailure = (error: string) => {
  return {
    type: SEARCH_USERS_FAILURE,
    payload: error,
  };
};
