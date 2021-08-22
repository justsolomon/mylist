import { Dispatch } from "redux";
import axios from "../../utils/AxiosBase";
import getErrorMessage from "../../utils/GetErrorMessage";
import { searchFailure, searchRequest, searchSuccess } from "./searchActions";

const search = (query: string) => {
  return (dispatch: Dispatch) => {
    dispatch(searchRequest());
    axios
      .get(`/search?query=${query}`)
      .then((res) => {
        dispatch(searchSuccess(res.data));
      })
      .catch((err) => {
        const errorMessage = getErrorMessage(err);

        dispatch(searchFailure(errorMessage));
      });
  };
};

export default search;
