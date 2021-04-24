import axios from "../../../utils/AxiosBase";
import getErrorMessage from "../../../utils/GetErrorMessage";
import { resetAuthReducer } from "../authActions";
import {
  forgotPasswordFailure,
  forgotPasswordRequest,
  forgotPasswordSuccess,
} from "./forgotPasswordActions";

const forgotPassword = (values: object) => {
  return (dispatch: any) => {
    dispatch(forgotPasswordRequest());
    axios
      .post("/reset-password", values)
      .then((res) => {
        dispatch(forgotPasswordSuccess(res.data));

        setTimeout(() => dispatch(resetAuthReducer), 1000);
      })
      .catch((err) => {
        const errorMessage = getErrorMessage(err);

        dispatch(forgotPasswordFailure(errorMessage));
      });
  };
};

export default forgotPassword;
