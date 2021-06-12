import { Dispatch } from "redux";
import axios from "../../../utils/AxiosBase";
import getErrorMessage from "../../../utils/GetErrorMessage";
import { getUserSuccess } from "../../user/get/getUserActions";
import { resetBoardData } from "../boardActions";
import { getBoardFailure } from "../get/getBoardActions";
import {
  updateBoardFailure,
  updateBoardRequest,
  updateBoardSuccess,
  sendInviteSuccess,
  inviteRequest,
} from "./updateBoardActions";

const updateBoard = (values: object, id: string) => {
  return (dispatch: Dispatch) => {
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

export const sendBoardInvite = (
  boardId: string,
  boardName: string,
  firstName: string,
  username: string,
  recipientAddresses: string[]
) => {
  return (dispatch: Dispatch) => {
    dispatch(inviteRequest());

    axios
      .post("/board/invite", {
        boardId,
        boardName,
        firstName,
        username,
        recipientAddresses,
      })
      .then((res) => {
        dispatch(sendInviteSuccess(res.data.success));
      })
      .catch((err) => {
        const errorMessage = getErrorMessage(err);

        dispatch(updateBoardFailure(errorMessage));
      });
  };
};

export const boardMemberAction = (
  boardId: string,
  memberId: string,
  action: "join" | "leave"
) => {
  return (dispatch: Dispatch) => {
    dispatch(inviteRequest());

    axios
      .post(`/board/${action === "join" ? "join" : "member/remove"}`, {
        boardId,
        memberId,
      })
      .then((res) => {
        dispatch(getUserSuccess(res.data.user));

        //remove user prop from response data
        delete res.data.user;
        dispatch(updateBoardSuccess(res.data));

        dispatch(resetBoardData());
      })
      .catch((err) => {
        const errorMessage = getErrorMessage(err);

        dispatch(getBoardFailure(errorMessage));
      });
  };
};

export default updateBoard;
