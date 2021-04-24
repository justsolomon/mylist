import {
  CREATE_LIST_FAILURE,
  CREATE_LIST_REQUEST,
  CREATE_LIST_SUCCESS,
} from "./create/createListTypes";
import {
  DELETE_LIST_FAILURE,
  DELETE_LIST_REQUEST,
  DELETE_LIST_SUCCESS,
} from "./delete/deleteListTypes";
import { RESET_LIST_DATA } from "./listTypes";
import {
  UPDATE_LIST_FAILURE,
  UPDATE_LIST_REQUEST,
  UPDATE_LIST_SUCCESS,
} from "./update/updateListTypes";

const initialState = {
  loading: false,
  success: false,
  error: "",
};

const listReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CREATE_LIST_REQUEST:
    case UPDATE_LIST_REQUEST:
    case DELETE_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_LIST_SUCCESS:
    case UPDATE_LIST_SUCCESS:
    case DELETE_LIST_SUCCESS:
      return {
        loading: false,
        error: "",
        success: true,
      };
    case CREATE_LIST_FAILURE:
    case UPDATE_LIST_FAILURE:
    case DELETE_LIST_FAILURE:
      return {
        loading: false,
        success: false,
        error: action.payload,
      };
    case RESET_LIST_DATA:
      return initialState;
    default:
      return state;
  }
};

export default listReducer;
