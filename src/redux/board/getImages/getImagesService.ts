import axios from "axios";
import getErrorMessage from "../../../utils/GetErrorMessage";
import {
  getImagesFailure,
  getImagesRequest,
  getImagesSuccess,
} from "./getImagesActions";

const getBoardImages = () => {
  return (dispatch: any) => {
    dispatch(getImagesRequest());
    axios
      .get(
        "https://api.unsplash.com/photos/random?orientation=landscape&query=background&count=5&client_id=6BSP0M2eiRBF6g5SAo5x7jSHLe2VcyvReekLN_XhlN8"
      )
      .then((res) => {
        let data = res.data;
        let imageArray = [];

        for (let i = 0; i < data.length; i++) {
          imageArray.push({
            imageUrl: data[i].urls.thumb,
            fullImage: data[i].urls.regular,
            description: data[i].alt_description,
          });
        }

        dispatch(getImagesSuccess(imageArray));
      })
      .catch((err) => {
        let errorMessage = getErrorMessage(err);
        if (errorMessage === "Network Error")
          errorMessage = `Could not load images.`;

        dispatch(getImagesFailure(errorMessage));
      });
  };
};

export default getBoardImages;
