import { IOrders } from "../../../globalTypes";

export interface IOrdersState {
  orders: IOrders[];
  loading: boolean;
  error: null | string;
}

export enum OrdersActionTypes {
  FETCH_ORDERS = "FETCH_ORDERS",
  FETCH_ORDERS_SUCCESS = "FETCH_ORDERS_SUCCESS",
  FETCH_ORDERS_ERROR = "FETCH_ORDERS_ERROR",
}

interface IFetchOrdersAction {
  type: OrdersActionTypes.FETCH_ORDERS;
}
interface IFetchOrdersSuccessAction {
  type: OrdersActionTypes.FETCH_ORDERS_SUCCESS;
  payload: IOrders[];
}
interface IFetchOrdersErrorAction {
  type: OrdersActionTypes.FETCH_ORDERS_ERROR;
  payload: string;
}

export type OrdersAction =
  | IFetchOrdersAction
  | IFetchOrdersSuccessAction
  | IFetchOrdersErrorAction;
