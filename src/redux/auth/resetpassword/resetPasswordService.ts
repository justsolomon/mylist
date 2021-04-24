import axios from "../../../utils/AxiosBase";
import getErrorMessage from "../../../utils/GetErrorMessage";
import { resetAuthReducer } from "../authActions";
import {
  resetPasswordFailure,
  resetPasswordRequest,
  resetPasswordSuccess,
} from "./resetPasswordActions";

const resetPassword = (values: object) => {
  return (dispatch: any) => {
    dispatch(resetPasswordRequest());
    axios
      .put("/reset-password", values)
      .then((res) => {
        dispatch(resetPasswordSuccess(res.data));
        setTimeout(() => dispatch(resetAuthReducer()), 1000);
      })
      .catch((err) => {
        const errorMessage = getErrorMessage(err);

        dispatch(resetPasswordFailure(errorMessage));
      });
  };
};

export default resetPassword;
