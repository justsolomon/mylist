import { Dispatch } from "redux";
import axios from "../../../utils/AxiosBase";
import getErrorMessage from "../../../utils/GetErrorMessage";
import {
  searchUsersFailure,
  searchUsersRequest,
  searchUsersSuccess,
} from "./searchUsersActions";

const searchUsers = (query: string) => {
  return (dispatch: Dispatch) => {
    dispatch(searchUsersRequest());
    axios
      .get(`/user/search?query=${query}`)
      .then((res) => {
        dispatch(searchUsersSuccess(res.data));
      })
      .catch((err) => {
        const errorMessage = getErrorMessage(err);

        dispatch(searchUsersFailure(errorMessage));
      });
  };
};

export default searchUsers;
