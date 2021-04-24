import { combineReducers } from "redux";
import authReducer from "./auth/authReducer";
import boardReducer from "./board/boardReducer";
import userReducer from "./user/userReducer";
import listReducer from "./list/listReducer";
import cardReducer from "./card/cardReducer";
import createBoardReducer from "./board/create/createBoardReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  board: combineReducers({ index: boardReducer, create: createBoardReducer }),
  list: listReducer,
  card: cardReducer,
});

export default rootReducer;
