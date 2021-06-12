import {
  SEARCH_USERS_FAILURE,
  SEARCH_USERS_REQUEST,
  SEARCH_USERS_SUCCESS,
} from "./searchUsersTypes";

const initialState = {
  loading: false,
  success: false,
  //@ts-ignore
  data: [],
  error: "",
};

const searchUsersReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SEARCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SEARCH_USERS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
        success: true,
      };
    case SEARCH_USERS_FAILURE:
      return {
        loading: false,
        success: false,
        data: {},
        error: action.payload,
      };
    default:
      return state;
  }
};

export default searchUsersReducer;
