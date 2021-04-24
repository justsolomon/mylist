import axios from "../../../utils/AxiosBase";
import getErrorMessage from "../../../utils/GetErrorMessage";
import { resetCardData } from "../cardActions";
import {
  getCardFailure,
  getCardRequest,
  getCardSuccess,
} from "./getCardActions";

const getCard = (id: string) => {
  return (dispatch: any) => {
    dispatch(getCardRequest());
    axios
      .get(`/todo/${id}`)
      .then((res) => {
        dispatch(getCardSuccess(res.data));

        setTimeout(() => dispatch(resetCardData()), 100);
      })
      .catch((err) => {
        const errorMessage = getErrorMessage(err);

        dispatch(getCardFailure(errorMessage));
      });
  };
};

export default getCard;
