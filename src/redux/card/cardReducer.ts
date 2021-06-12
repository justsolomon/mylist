import {
  CREATE_CARD_FAILURE,
  CREATE_CARD_REQUEST,
  CREATE_CARD_SUCCESS,
} from "./create/createCardTypes";
import { RESET_CARD_DATA } from "./cardTypes";
import {
  UPDATE_CARD_FAILURE,
  UPDATE_CARD_REQUEST,
  UPDATE_CARD_SUCCESS,
} from "./update/updateCardTypes";
import {
  GET_CARD_FAILURE,
  GET_CARD_REQUEST,
  GET_CARD_SUCCESS,
} from "./get/getCardTypes";
import {
  DELETE_CARD_FAILURE,
  DELETE_CARD_REQUEST,
  DELETE_CARD_SUCCESS,
} from "./delete/deleteCardTypes";

const initialState = {
  loading: false,
  deleteLoading: false,
  deleteSuccess: false,
  success: false,
  data: {},
  error: "",
};

const cardReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CREATE_CARD_REQUEST:
    case UPDATE_CARD_REQUEST:
    case GET_CARD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_CARD_REQUEST:
      return {
        ...state,
        deleteLoading: true,
      };
    case CREATE_CARD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        success: true,
      };
    case GET_CARD_SUCCESS:
    case UPDATE_CARD_SUCCESS:
      return {
        ...initialState,
        success: true,
        data: action.payload,
      };
    case DELETE_CARD_SUCCESS:
      return {
        ...state,
        error: "",
        deleteLoading: false,
        deleteSuccess: true,
      };
    case CREATE_CARD_FAILURE:
    case GET_CARD_FAILURE:
    case UPDATE_CARD_FAILURE:
    case DELETE_CARD_FAILURE:
      return {
        ...initialState,
        error: action.payload,
      };
    case RESET_CARD_DATA:
      return {
        ...state,
        success: false,
      };
    default:
      return state;
  }
};

export default cardReducer;
