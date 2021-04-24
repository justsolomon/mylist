import axios from "../../../utils/AxiosBase";
import getErrorMessage from "../../../utils/GetErrorMessage";
import { getBoardSuccess } from "../../board/get/getBoardActions";
import {
  createListFailure,
  createListRequest,
  createListSuccess,
} from "./createListActions";
import { resetListData } from "../listActions";

const createList = (values: object, boardId: string) => {
  return (dispatch: any) => {
    dispatch(createListRequest());
    axios
      .post(`/list/create/${boardId}`, values)
      .then((res) => {
        dispatch(createListSuccess());
        dispatch(getBoardSuccess(res.data));
        dispatch(resetListData());
      })
      .catch((err) => {
        const errorMessage = getErrorMessage(err);

        dispatch(createListFailure(errorMessage));
      });
  };
};

export default createList;
