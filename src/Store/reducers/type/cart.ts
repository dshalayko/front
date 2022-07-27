import { ICartItem, IOrder, IProduct } from "../../../globalTypes";

export interface ICartState {
  cartProducts: ICartItem[];
}

export enum CartActionTypes {
  UPDATE_CART = "UPDATE_CART",
  UPDATE_CART_ITEM = "UPDATE_CART_ITEM",
  UPDATE_CART_ITEM_QUANTITY = "UPDATE_CART_ITEM_QUANTITY",
  CLEAR_CART_ITEM = "CLEAR_CART",
  CLEAN_LOCAL_STORAGE_CART = "CLEAN_LOCAL_STORAGE_CART",
  PLACE_AN_ORDER = "PLACE_AN_ORDER",
}

interface IUpdateCart {
  type: CartActionTypes.UPDATE_CART;
}

interface IUpdateCartItemAction {
  type: CartActionTypes.UPDATE_CART_ITEM;
  product: IProduct
}

interface IUpdateCartItemQuantityAction {
  type: CartActionTypes.UPDATE_CART_ITEM_QUANTITY;
  product: IProduct
  quantity: number
}

interface IClearCartAction {
  type: CartActionTypes.CLEAR_CART_ITEM;
  product: IProduct
}

interface ICleanLocalStorageCart {
  type: CartActionTypes.CLEAN_LOCAL_STORAGE_CART;
}

interface IPlaceAnOrder {
  type: CartActionTypes.PLACE_AN_ORDER;
  order: IOrder
}

export type CartAction =
  | IUpdateCart
  | IUpdateCartItemAction
  | IUpdateCartItemQuantityAction
  | IClearCartAction
  | ICleanLocalStorageCart
  | IPlaceAnOrder;
