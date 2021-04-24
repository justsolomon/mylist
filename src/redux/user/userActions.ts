import { UPDATE_JWT } from "./userTypes";

export const updateJWT = (data: any) => {
  return {
    type: UPDATE_JWT,
    payload: data,
  };
};
