// export interface RootState {
//     auth: authReducer,
//   user: userReducer,
//   board: combineReducers({ index: boardReducer, create: createBoardReducer }),
//   list: listReducer,
//   card: cardReducer,
//   search: combineReducers({ users: searchUsersReducer }),
// }

export interface Action<Payload = null> {
  type: string;
  payload?: Payload;
}

export interface DefaultReducer<DataType> {
  loading: boolean;
  success: boolean;
  error: string;
  data: DataType;
}
