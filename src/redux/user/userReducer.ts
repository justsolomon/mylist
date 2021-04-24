import {
  GET_USER_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
} from "./get/getUserTypes";
import { UPDATE_JWT } from "./userTypes";

const initialState = {
  loading: false,
  success: false,
  data: {},
  error: "",
};

const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_USER_SUCCESS:
      return {
        loading: false,
        data: { ...state.data, ...action.payload },
        error: "",
        success: true,
      };
    case GET_USER_FAILURE:
      return {
        loading: false,
        success: false,
        data: {},
        error: action.payload,
      };
    case UPDATE_JWT:
      return {
        ...state,
        data: {
          ...state.data,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};

export default userReducer;
