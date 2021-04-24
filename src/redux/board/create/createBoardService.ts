import axios from "../../../utils/AxiosBase";
import getErrorMessage from "../../../utils/GetErrorMessage";
import { getUserSuccess } from "../../user/get/getUserActions";
import { resetBoardData } from "../boardActions";
import { getBoardSuccess } from "../get/getBoardActions";
import {
  createBoardFailure,
  createBoardRequest,
  createBoardReset,
  createBoardSuccess,
} from "./createBoardActions";

const createBoard = (values: object) => {
  return (dispatch: any) => {
    dispatch(createBoardRequest());
    axios
      .post("/board/create", values)
      .then((res) => {
        dispatch(createBoardSuccess(res.data._id));

        dispatch(getUserSuccess(res.data.user));
        //remove user prop from response data
        delete res.data.user;

        dispatch(createBoardReset());

        setTimeout(() => {
          dispatch(getBoardSuccess(res.data));
          dispatch(resetBoardData());
        }, 500);
      })
      .catch((err) => {
        const errorMessage = getErrorMessage(err);

        dispatch(createBoardFailure(errorMessage));
      });
  };
};

export default createBoard;
