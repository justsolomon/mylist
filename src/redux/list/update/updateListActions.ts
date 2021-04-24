import {
  UPDATE_LIST_FAILURE,
  UPDATE_LIST_REQUEST,
  UPDATE_LIST_SUCCESS,
} from "./updateListTypes";

export const updateListRequest = () => {
  return {
    type: UPDATE_LIST_REQUEST,
  };
};

export const updateListSuccess = () => {
  return {
    type: UPDATE_LIST_SUCCESS,
  };
};

export const updateListFailure = (error: string) => {
  return {
    type: UPDATE_LIST_FAILURE,
    payload: error,
  };
};
