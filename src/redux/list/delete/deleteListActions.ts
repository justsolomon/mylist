import {
  DELETE_LIST_FAILURE,
  DELETE_LIST_REQUEST,
  DELETE_LIST_SUCCESS,
} from "./deleteListTypes";

export const deleteListRequest = () => {
  return {
    type: DELETE_LIST_REQUEST,
  };
};

export const deleteListSuccess = () => {
  return {
    type: DELETE_LIST_SUCCESS,
  };
};

export const deleteListFailure = (error: string) => {
  return {
    type: DELETE_LIST_FAILURE,
    payload: error,
  };
};
