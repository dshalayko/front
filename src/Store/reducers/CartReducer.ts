import { ICartItem } from "../../globalTypes";
import { ICartState, CartActionTypes, CartAction } from "./type/cart";
import { placeOrder } from "../../API/ordersAPI";

const defaultState: ICartState = {
  cartProducts: [],
};

export default function cartReducer(
  state = defaultState,
  action: CartAction
): ICartState {
  switch (action.type) {
    case CartActionTypes.UPDATE_CART: {
      let historyProducts = JSON.parse(localStorage.getItem("cartProducts") as string) as ICartItem[];
      if(!historyProducts){
        historyProducts = [];
      }
      state.cartProducts = historyProducts;
      return { ...state };
    }
    case CartActionTypes.UPDATE_CART_ITEM: {
      const products = state.cartProducts;
      const index = products.findIndex(item => item.product.name == action.product.name);
      if(index !== -1){
        const item = products[index];
        ++item.quantity;
      } else {
        products.push({
          product: action.product,
          quantity: 1,
        });
      }
      localStorage.setItem("cartProducts", JSON.stringify(products));
      return { cartProducts: products };
    }
    case CartActionTypes.UPDATE_CART_ITEM_QUANTITY: {
      const historyProducts = JSON.parse(localStorage.getItem("cartProducts") as string) as ICartItem[];
      const products = historyProducts ? historyProducts : [];
      const index = products.findIndex(
        (item) => item.product.name == action.product.name
      );
      if (index !== -1) {
        const item = products[index];
        item.quantity += action.quantity;
        if (item.quantity <= 0) {
          products.splice(index, index+1);
        }
      } else {
        products.push({
          product: action.product,
          quantity: action.quantity
        });
      }
      localStorage.setItem("cartProducts", JSON.stringify(products));
      state.cartProducts = products;
      return { ...state };
    }
    case CartActionTypes.CLEAR_CART_ITEM:{
      const products = state.cartProducts;
      const productToRemove = action.product.name;
      const index = products.findIndex(item => item.product.name == productToRemove);
      if(index !== -1){
        products.splice(index, index+1);
      }
      localStorage.setItem("cartProducts", JSON.stringify(products));
      return { cartProducts: products };
    }
    case CartActionTypes.CLEAN_LOCAL_STORAGE_CART: {
      const lastClean = JSON.parse(localStorage.getItem("lastClean") as string) as number;
      if(lastClean){
        const lastCleanDate = new Date(lastClean);
        const now = new Date();
        if(now.getTime() - lastCleanDate.getTime() >= 24*60*60*1000){
          localStorage.removeItem("cartProducts");
          localStorage.setItem("lastClean", JSON.stringify(now.getTime()));
        }
      } else {
        const cleanDate = new Date();
        localStorage.setItem("lastClean", JSON.stringify(cleanDate.getTime()));
      }
      return {...state};
    }
    case CartActionTypes.PLACE_AN_ORDER: {
      placeOrder(action.order);
      localStorage.removeItem("cartProducts");
      return {...state};
    }
    default:
      return state;
  }
}
