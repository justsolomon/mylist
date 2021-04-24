import axios from "../../../utils/AxiosBase";
import getErrorMessage from "../../../utils/GetErrorMessage";
import { resetBoardData } from "../boardActions";
import {
  getBoardFailure,
  getBoardRequest,
  getBoardSuccess,
} from "./getBoardActions";

const getBoard = (id: string) => {
  return (dispatch: any) => {
    dispatch(getBoardRequest());
    axios
      .get(`/board/${id}`)
      .then((res) => {
        dispatch(getBoardSuccess(res.data));

        setTimeout(() => dispatch(resetBoardData()), 100);
      })
      .catch((err) => {
        const errorMessage = getErrorMessage(err);

        if (errorMessage === "No token provided") dispatch(getBoard(id));
        else dispatch(getBoardFailure(errorMessage));
      });
  };
};

export default getBoard;
