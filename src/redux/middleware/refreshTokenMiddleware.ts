import axios from "../../utils/AxiosBase";
import getErrorMessage from "../../utils/GetErrorMessage";
import logout from "../../utils/Logout";
import store from "../store";
import { updateJWT } from "../user/userActions";
import { getStorageValue } from "../../hooks/useStorage";

export const checkTokenExpiration = () => {
  const jwt = store.getState().user.data.jwt;

  if (jwt) return jwt.expiresAt * 1000 < Date.now();
};

export const refreshTokenRequest = (dispatch: any) => {
  axios
    .post("/refresh-token")
    .then((res) => {
      dispatch(updateJWT(res.data));
    })
    .catch((err) => {
      console.log(getErrorMessage(err));

      if (err === "Network Error") refreshTokenRequest(dispatch);
      else logout();
    });
};

const refreshTokenMiddleware = ({ dispatch }: any) => (next: any) => (
  action: any
) => {
  if (getStorageValue("loggedIn") && checkTokenExpiration())
    refreshTokenRequest(dispatch);
  next(action);
};

export default refreshTokenMiddleware;
