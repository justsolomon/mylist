import axios from "../../../utils/AxiosBase";
import getErrorMessage from "../../../utils/GetErrorMessage";
import { getUserSuccess } from "../../user/get/getUserActions";
import { resetAuthReducer } from "../authActions";
import {
  loginUserFailure,
  loginUserRequest,
  loginUserSuccess,
} from "./loginActions";

const loginUser = (values: object) => {
  return (dispatch: any) => {
    dispatch(loginUserRequest());
    axios
      .post("/login", values)
      .then((res) => {
        dispatch(loginUserSuccess(res.data));
        dispatch(getUserSuccess(res.data));
        setTimeout(() => dispatch(resetAuthReducer()), 1000);
      })
      .catch((err) => {
        const errorMessage = getErrorMessage(err);

        dispatch(loginUserFailure(errorMessage));
      });
  };
};

export default loginUser;
