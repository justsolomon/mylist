import {
  GET_IMAGES_FAILURE,
  GET_IMAGES_REQUEST,
  GET_IMAGES_SUCCESS,
} from "./getImagesTypes";

export const getImagesRequest = () => {
  return {
    type: GET_IMAGES_REQUEST,
  };
};

export const getImagesSuccess = (data: any) => {
  return {
    type: GET_IMAGES_SUCCESS,
    payload: data,
  };
};

export const getImagesFailure = (error: string) => {
  return {
    type: GET_IMAGES_FAILURE,
    payload: error,
  };
};
