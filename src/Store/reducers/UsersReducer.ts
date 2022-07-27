import { IUsersState, UsersActionTypes, UsersAction } from "./type/users";

const defaultState: IUsersState = {
  users: [],
  loading: false,
  error: null,
};

export default function goodsReducer(
  state = defaultState,
  action: UsersAction
): IUsersState {
  switch (action.type) {
    case UsersActionTypes.FETCH_USERS:
      return { loading: true, error: null, users: [] };
    case UsersActionTypes.FETCH_USERS_SUCCESS:
      return { loading: false, error: null, users: action.payload };
    case UsersActionTypes.FETCH_USERS_ERROR:
      return { loading: false, error: action.payload, users: [] };
    default:
      return state;
  }
}
