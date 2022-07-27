import { Dispatch } from "redux";
import { OrdersAction, OrdersActionTypes } from "../reducers/type/order";
import { getOrders } from "../../API/ordersAPI";

export const fetchOrders = () => {
  return async (dispatch: Dispatch<OrdersAction>): Promise<void> => {
    try {
      dispatch({ type: OrdersActionTypes.FETCH_ORDERS });
      const response = await getOrders();
      dispatch({
        type: OrdersActionTypes.FETCH_ORDERS_SUCCESS,
        payload: response,
      });
    } catch (error) {
      dispatch({
        type: OrdersActionTypes.FETCH_ORDERS_ERROR,
        payload: "An error occurred while loading data.",
      });
    }
  };
};
