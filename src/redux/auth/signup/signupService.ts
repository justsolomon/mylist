import axios from "../../../utils/AxiosBase";
import getErrorMessage from "../../../utils/GetErrorMessage";
import { getUserSuccess } from "../../user/get/getUserActions";
import { resetAuthReducer } from "../authActions";
import {
  signupUserFailure,
  signupUserRequest,
  signupUserSuccess,
} from "./signupActions";

const signupUser = (values: object) => {
  return (dispatch: any) => {
    dispatch(signupUserRequest());
    axios
      .post("/signup", values)
      .then((res) => {
        dispatch(signupUserSuccess(res.data));
        dispatch(getUserSuccess(res.data));
        setTimeout(() => dispatch(resetAuthReducer()), 1000);
      })
      .catch((err) => {
        const errorMessage = getErrorMessage(err);

        dispatch(signupUserFailure(errorMessage));
      });
  };
};

export default signupUser;
