import axios from "../../../utils/AxiosBase";
import getErrorMessage from "../../../utils/GetErrorMessage";
import { getBoardSuccess } from "../../board/get/getBoardActions";
import {
  createCardFailure,
  createCardRequest,
  createCardSuccess,
} from "./createCardActions";
import { resetCardData } from "../cardActions";

const createCard = (values: object, listId: string, boardId: string) => {
  return (dispatch: any) => {
    dispatch(createCardRequest());
    axios
      .post(`/todo/create/${listId}/${boardId}`, values)
      .then((res) => {
        dispatch(createCardSuccess());
        dispatch(getBoardSuccess(res.data));
        dispatch(resetCardData());
      })
      .catch((err) => {
        const errorMessage = getErrorMessage(err);

        dispatch(createCardFailure(errorMessage));
      });
  };
};

export default createCard;
