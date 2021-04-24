import axios from "../../../utils/AxiosBase";
import getErrorMessage from "../../../utils/GetErrorMessage";
import { getBoardSuccess } from "../../board/get/getBoardActions";
import { resetListData } from "../listActions";
import {
  deleteListFailure,
  deleteListRequest,
  deleteListSuccess,
} from "./deleteListActions";

const deleteList = (id: string) => {
  return (dispatch: any) => {
    dispatch(deleteListRequest());
    axios
      .delete(`/list/${id}`)
      .then((res) => {
        dispatch(deleteListSuccess());
        dispatch(getBoardSuccess(res.data));
        dispatch(resetListData());
      })
      .catch((err) => {
        const errorMessage = getErrorMessage(err);

        dispatch(deleteListFailure(errorMessage));
      });
  };
};

export default deleteList;
