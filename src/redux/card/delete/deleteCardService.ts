import axios from "../../../utils/AxiosBase";
import getErrorMessage from "../../../utils/GetErrorMessage";
import { getBoardSuccess } from "../../board/get/getBoardActions";
import { resetCardData } from "../cardActions";
import {
  deleteCardFailure,
  deleteCardRequest,
  deleteCardSuccess,
} from "./deleteCardActions";

const deleteCard = (id: string) => {
  return (dispatch: any) => {
    dispatch(deleteCardRequest());
    axios
      .delete(`/todo/${id}`)
      .then((res) => {
        dispatch(deleteCardSuccess());
        dispatch(getBoardSuccess(res.data));
        dispatch(resetCardData());
      })
      .catch((err) => {
        const errorMessage = getErrorMessage(err);

        dispatch(deleteCardFailure(errorMessage));
      });
  };
};

export default deleteCard;
