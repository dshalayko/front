import { IOrdersState, OrdersActionTypes, OrdersAction } from "./type/order";

const defaultState: IOrdersState = {
  orders: [],
  loading: false,
  error: null,
};

export default function ordersReducer(
  state = defaultState,
  action: OrdersAction
): IOrdersState {
  switch (action.type) {
    case OrdersActionTypes.FETCH_ORDERS:
      return { loading: true, error: null, orders: [] };
    case OrdersActionTypes.FETCH_ORDERS_SUCCESS:
      return { loading: false, error: null, orders: action.payload };
    case OrdersActionTypes.FETCH_ORDERS_ERROR:
      return { loading: false, error: action.payload, orders: [] };

    default:
      return state;
  }
}
