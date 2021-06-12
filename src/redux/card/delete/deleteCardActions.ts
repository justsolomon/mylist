import {
    DELETE_CARD_FAILURE,
    DELETE_CARD_REQUEST,
    DELETE_CARD_SUCCESS,
  } from "./deleteCardTypes";
  
  export const deleteCardRequest = () => {
    return {
      type: DELETE_CARD_REQUEST,
    };
  };
  
  export const deleteCardSuccess = () => {
    return {
      type: DELETE_CARD_SUCCESS,
    };
  };
  
  export const deleteCardFailure = (error: string) => {
    return {
      type: DELETE_CARD_FAILURE,
      payload: error,
    };
  };
  