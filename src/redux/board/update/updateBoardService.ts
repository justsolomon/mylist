import axios from "../../../utils/AxiosBase";
import getErrorMessage from "../../../utils/GetErrorMessage";
import { getUserSuccess } from "../../user/get/getUserActions";
import { resetBoardData } from "../boardActions";
import {
  updateBoardFailure,
  updateBoardRequest,
  updateBoardSuccess,
} from "./updateBoardActions";

const updateBoard = (values: object, id: string) => {
  return (dispatch: any) => {
    dispatch(updateBoardRequest());
    axios
      .put(`/board/${id}`, values)
      .then((res) => {
        dispatch(getUserSuccess(res.data.user));

        //remove user prop from response data
        delete res.data.user;
        dispatch(updateBoardSuccess(res.data));

        dispatch(resetBoardData());
      })
      .catch((err) => {
        const errorMessage = getErrorMessage(err);

        dispatch(updateBoardFailure(errorMessage));
      });
  };
};

export default updateBoard;
