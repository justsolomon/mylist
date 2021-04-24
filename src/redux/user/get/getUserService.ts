import axios from "../../../utils/AxiosBase";
import getErrorMessage from "../../../utils/GetErrorMessage";
import {
  getUserFailure,
  getUserRequest,
  getUserSuccess,
} from "./getUserActions";

const getUser = () => {
  return (dispatch: any) => {
    dispatch(getUserRequest());
    axios
      .get("/user")
      .then((res) => {
        dispatch(getUserSuccess(res.data));
      })
      .catch((err) => {
        const errorMessage = getErrorMessage(err);

        if (errorMessage === "No token provided") dispatch(getUser());
        else dispatch(getUserFailure(errorMessage));
      });
  };
};

export default getUser;
