import { IUser } from "../../../globalTypes";

export interface IUsersState {
  users: IUser[];
  loading: boolean;
  error: null | string;
}

export enum UsersActionTypes {
  FETCH_USERS = "FETCH_USERS",
  FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
  FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
}

interface IFetchUsersAction {
  type: UsersActionTypes.FETCH_USERS;
}
interface IFetchUsersSuccessAction {
  type: UsersActionTypes.FETCH_USERS_SUCCESS;
  payload: IUser[];
}
interface IFetchUsersErrorAction {
  type: UsersActionTypes.FETCH_USERS_ERROR;
  payload: string;
}

export type UsersAction =
  | IFetchUsersAction
  | IFetchUsersSuccessAction
  | IFetchUsersErrorAction;
