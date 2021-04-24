import axios from "../../../utils/AxiosBase";
import getErrorMessage from "../../../utils/GetErrorMessage";
import {
  updateUserFailure,
  updateUserRequest,
  updateUserSuccess,
} from "./updateUserActions";

const updateUser = (values: object) => {
  return (dispatch: any) => {
    dispatch(updateUserRequest());
    axios
      .post("/user", values)
      .then((res) => {
        dispatch(updateUserSuccess(res.data));
      })
      .catch((err) => {
        const errorMessage = getErrorMessage(err);

        dispatch(updateUserFailure(errorMessage));
      });
  };
};

export default updateUser;
