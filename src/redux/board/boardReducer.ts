import { RESET_BOARD_DATA } from "./boardTypes";
import {
  GET_BOARD_FAILURE,
  GET_BOARD_REQUEST,
  GET_BOARD_SUCCESS,
} from "./get/getBoardTypes";
import {
  GET_IMAGES_FAILURE,
  GET_IMAGES_REQUEST,
  GET_IMAGES_SUCCESS,
} from "./getImages/getImagesTypes";
import {
  UPDATE_BOARD_FAILURE,
  UPDATE_BOARD_SUCCESS,
} from "./update/updateBoardTypes";

const initialState = {
  loading: false,
  imagesLoading: false,
  success: false,
  images: [] as string[],
  data: {},
  error: "",
};

const boardReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_BOARD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_IMAGES_REQUEST:
      return {
        ...state,
        imagesLoading: true,
      };
    case GET_BOARD_SUCCESS:
    case UPDATE_BOARD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        success: true,
        data: action.payload,
      };
    case GET_IMAGES_SUCCESS:
      return {
        ...state,
        imagesLoading: false,
        error: "",
        images: action.payload,
      };
    case GET_IMAGES_FAILURE:
    case GET_BOARD_FAILURE:
      return {
        ...initialState,
        error: action.payload,
      };
    case UPDATE_BOARD_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case RESET_BOARD_DATA:
      return {
        ...state,
        success: false,
      };
    default:
      return state;
  }
};

export default boardReducer;
