import {
  GET_CARD_FAILURE,
  GET_CARD_REQUEST,
  GET_CARD_SUCCESS,
} from "./getCardTypes";

export const getCardRequest = () => {
  return {
    type: GET_CARD_REQUEST,
  };
};

export const getCardSuccess = (data: any) => {
  return {
    type: GET_CARD_SUCCESS,
    payload: data,
  };
};

export const getCardFailure = (error: string) => {
  return {
    type: GET_CARD_FAILURE,
    payload: error,
  };
};
