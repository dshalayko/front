import { Dispatch } from "redux";
import { IOrder, IProduct } from "../../globalTypes";
import { CartAction, CartActionTypes } from "../reducers/type/cart";

export const updateCart = () => {
  return (dispatch: Dispatch<CartAction>): void => {
    dispatch({
      type: CartActionTypes.UPDATE_CART
    });
  };
};

export const updateCartItem = (product: IProduct) => {
  return (dispatch: Dispatch<CartAction>): void => {
    dispatch({
      type: CartActionTypes.UPDATE_CART_ITEM,
      product
    });
  };
};

export const updateCartItemQuantity = (product: IProduct, quantity: number) => {
    return (dispatch: Dispatch<CartAction>): void => {
      dispatch({
        type: CartActionTypes.UPDATE_CART_ITEM_QUANTITY,
        product,
        quantity
      });
    };
};

export const clearCartItem = (product: IProduct) => {
    return (dispatch: Dispatch<CartAction>): void => {
      dispatch({
        type: CartActionTypes.CLEAR_CART_ITEM,
        product
      });
    };
};

export const setCleanLocalStorageCart = () => {
  return (dispatch: Dispatch<CartAction>): void => {
    dispatch({
      type: CartActionTypes.CLEAN_LOCAL_STORAGE_CART,
    });
  };
};

export const placeAnOrder = (order: IOrder) => {
  return (dispatch: Dispatch<CartAction>): void => {
    dispatch({
      type: CartActionTypes.PLACE_AN_ORDER,
      order
    });
  };
};