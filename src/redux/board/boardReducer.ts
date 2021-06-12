import { IBoardMember } from "../../components/board/BoardMember";
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
  INVITE_REQUEST,
  SEND_INVITE_SUCCESS,
} from "./update/updateBoardTypes";

const initialState = {
  loading: false,
  imagesLoading: false,
  success: false,
  inviteLoading: false,
  inviteSuccess: "",
  images: [] as string[],
  data: { members: [] as IBoardMember[] },
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
    case INVITE_REQUEST:
      return {
        ...state,
        inviteLoading: true,
      };
    case GET_BOARD_SUCCESS:
    case UPDATE_BOARD_SUCCESS:
      return {
        ...state,
        inviteLoading: false,
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
    case SEND_INVITE_SUCCESS:
      return {
        ...state,
        inviteLoading: false,
        error: "",
        inviteSuccess: action.payload,
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
