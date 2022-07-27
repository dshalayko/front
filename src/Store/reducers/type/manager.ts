import { IManager } from "../../../globalTypes";

export interface IManagersState {
  managers: IManager[];
  loading: boolean;
  error: null | string;
}

export enum ManagersActionTypes {
  FETCH_MANAGERS = "FETCH_MANAGERS",
  FETCH_MANAGERS_SUCCESS = "FETCH_MANAGERS_SUCCESS",
  FETCH_MANAGERS_ERROR = "FETCH_MANAGERS_ERROR",
}

interface IFetchManagersAction {
  type: ManagersActionTypes.FETCH_MANAGERS;
}
interface IFetchManagersSuccessAction {
  type: ManagersActionTypes.FETCH_MANAGERS_SUCCESS;
  payload: IManager[];
}
interface IFetchManagersErrorAction {
  type: ManagersActionTypes.FETCH_MANAGERS_ERROR;
  payload: string;
}

export type ManagersAction =
  | IFetchManagersAction
  | IFetchManagersSuccessAction
  | IFetchManagersErrorAction;
