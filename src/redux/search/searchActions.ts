import { SEARCH_FAILURE, SEARCH_REQUEST, SEARCH_SUCCESS } from "./searchTypes";

export const searchRequest = () => {
  return {
    type: SEARCH_REQUEST,
  };
};

export const searchSuccess = (data: any) => {
  return {
    type: SEARCH_SUCCESS,
    payload: data,
  };
};

export const searchFailure = (error: string) => {
  return {
    type: SEARCH_FAILURE,
    payload: error,
  };
};
