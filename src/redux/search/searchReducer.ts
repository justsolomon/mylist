import { Action, DefaultReducer } from "../../types/store";
import { SEARCH_FAILURE, SEARCH_REQUEST, SEARCH_SUCCESS } from "./searchTypes";

interface ISearchResponse {
  boards: any[];
  todos: any[];
}

export const initialSearchData: ISearchResponse = { boards: [], todos: [] };

const initialState: DefaultReducer<ISearchResponse> = {
  loading: false,
  success: false,
  data: initialSearchData,
  error: "",
};

const searchReducer = (
  state = initialState,
  action: Action
): DefaultReducer<ISearchResponse> => {
  switch (action.type) {
    case SEARCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SEARCH_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
        success: true,
      };
    case SEARCH_FAILURE:
      return {
        loading: false,
        success: false,
        data: initialSearchData,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default searchReducer;
