import { Dispatch } from "redux";
import axios from "../../../utils/AxiosBase";
import getErrorMessage from "../../../utils/GetErrorMessage";
import { getBoardSuccess } from "../../board/get/getBoardActions";
import { resetCardData } from "../cardActions";
import {
  updateCardFailure,
  updateCardRequest,
  updateCardSuccess,
} from "./updateCardActions";

const updateCard = (values: object, id: string) => {
  return (dispatch: Dispatch) => {
    axios
      .put(`/todo/${id}`, values)
      .then((res) => {
        dispatch(getBoardSuccess(res.data.board));

        //remove board prop from response data
        delete res.data.board;

        dispatch(updateCardSuccess(res.data));
        dispatch(resetCardData());
      })
      .catch((err) => {
        const errorMessage = getErrorMessage(err);

        dispatch(updateCardFailure(errorMessage));
      });
  };
};

export const updateCardPosition = (
  listId: string,
  todoId: string,
  index: number
) => {
  return (dispatch: Dispatch) => {
    dispatch(updateCardRequest());
    axios
      .put(`/todo/${listId}/${todoId}/${index}`)
      .then((res) => {
        dispatch(getBoardSuccess(res.data));
      })
      .catch((err) => {
        const errorMessage = getErrorMessage(err);

        dispatch(updateCardFailure(errorMessage));
      });
  };
};

export const moveCardToList = (
  oldListId: string,
  newListId: string,
  todoId: string,
  index: number
) => {
  return (dispatch: Dispatch) => {
    dispatch(updateCardRequest());
    axios
      .put(`/todo/${oldListId}/${newListId}/${todoId}/${index}`)
      .then((res) => {
        dispatch(getBoardSuccess(res.data));
      })
      .catch((err) => {
        const errorMessage = getErrorMessage(err);

        dispatch(updateCardFailure(errorMessage));
      });
  };
};

export default updateCard;
