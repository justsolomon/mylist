import { RESET_AUTH_REDUCER } from "./authTypes";
import {
  FORGOT_PASSWORD_FAILURE,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
} from "./forgotpassword/forgotPasswordTypes";
import {
  LOGIN_USER_FAILURE,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
} from "./login/loginTypes";
import {
  RESET_PASSWORD_FAILURE,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
} from "./resetpassword/resetPasswordTypes";
import {
  SIGNUP_USER_FAILURE,
  SIGNUP_USER_REQUEST,
  SIGNUP_USER_SUCCESS,
} from "./signup/signupTypes";

const initialState = {
  loading: false,
  success: false,
  data: {},
  error: "",
};

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOGIN_USER_REQUEST:
    case SIGNUP_USER_REQUEST:
    case FORGOT_PASSWORD_REQUEST:
    case RESET_PASSWORD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_USER_SUCCESS:
    case SIGNUP_USER_SUCCESS:
    case FORGOT_PASSWORD_SUCCESS:
    case RESET_PASSWORD_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
        success: true,
      };
    case LOGIN_USER_FAILURE:
    case SIGNUP_USER_FAILURE:
    case FORGOT_PASSWORD_FAILURE:
    case RESET_PASSWORD_FAILURE:
      return {
        loading: false,
        success: false,
        data: {},
        error: action.payload,
      };
    case RESET_AUTH_REDUCER:
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
