import axios from "axios";
import store from "../../redux/store";

// Creates a base instance for all axios based request
const instance = axios.create({
  baseURL: `https://mylist-api.netlify.app/.netlify/functions/server`,
  withCredentials: true,
});

instance.interceptors.request.use((config) => {
  //get token from store
  const { jwt } = store?.getState().user.data;

  config.headers.Authorization = jwt ? `Bearer ${jwt.token}` : "";
  return config;
});

export default instance;
