import { Dispatch } from "redux";
import axios from "../../../utils/AxiosBase";
import getErrorMessage from "../../../utils/GetErrorMessage";
import { getBoardSuccess } from "../../board/get/getBoardActions";
import { resetListData } from "../listActions";
import {
  updateListFailure,
  updateListRequest,
  updateListSuccess,
} from "./updateListActions";

const updateList = (values: object, id: string) => {
  return (dispatch: Dispatch) => {
    dispatch(updateListRequest());
    axios
      .put(`/list/${id}`, values)
      .then((res) => {
        dispatch(updateListSuccess());
        dispatch(getBoardSuccess(res.data));
        dispatch(resetListData());
      })
      .catch((err) => {
        const errorMessage = getErrorMessage(err);

        dispatch(updateListFailure(errorMessage));
      });
  };
};

export const updateListPosition = (
  boardId: string,
  listId: string,
  index: number
) => {
  return (dispatch: Dispatch) => {
    dispatch(updateListRequest());
    axios
      .put(`/list/${boardId}/${listId}/${index}`)
      .then((res) => {
        dispatch(updateListSuccess());
        dispatch(getBoardSuccess(res.data));
        dispatch(resetListData());
      })
      .catch((err) => {
        const errorMessage = getErrorMessage(err);

        dispatch(updateListFailure(errorMessage));
      });
  };
};

export default updateList;
