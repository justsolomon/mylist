import {
  CREATE_CARD_FAILURE,
  CREATE_CARD_REQUEST,
  CREATE_CARD_SUCCESS,
} from "./createCardTypes";

export const createCardRequest = () => {
  return {
    type: CREATE_CARD_REQUEST,
  };
};

export const createCardSuccess = () => {
  return {
    type: CREATE_CARD_SUCCESS,
  };
};

export const createCardFailure = (error: string) => {
  return {
    type: CREATE_CARD_FAILURE,
    payload: error,
  };
};
