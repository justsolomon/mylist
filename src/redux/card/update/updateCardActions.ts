import {
  UPDATE_CARD_FAILURE,
  UPDATE_CARD_REQUEST,
  UPDATE_CARD_SUCCESS,
} from "./updateCardTypes";

export const updateCardRequest = () => {
  return {
    type: UPDATE_CARD_REQUEST,
  };
};

export const updateCardSuccess = (data: any) => {
  return {
    type: UPDATE_CARD_SUCCESS,
    payload: data,
  };
};

export const updateCardFailure = (error: string) => {
  return {
    type: UPDATE_CARD_FAILURE,
    payload: error,
  };
};
