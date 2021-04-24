import {
  CREATE_LIST_FAILURE,
  CREATE_LIST_REQUEST,
  CREATE_LIST_SUCCESS,
} from "./createListTypes";

export const createListRequest = () => {
  return {
    type: CREATE_LIST_REQUEST,
  };
};

export const createListSuccess = () => {
  return {
    type: CREATE_LIST_SUCCESS,
  };
};

export const createListFailure = (error: string) => {
  return {
    type: CREATE_LIST_FAILURE,
    payload: error,
  };
};
