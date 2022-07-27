import { Dispatch } from "redux";
import { GoodsAction, GoodsActionTypes } from "../reducers/type/goods";
import {getAllProduct, getProduct} from "../../API/goodsAPI";

export const fetchGoods = () => {
  return async (dispatch: Dispatch<GoodsAction>): Promise<void> => {
    try {
      dispatch({ type: GoodsActionTypes.FETCH_GOODS });
      const response = await getAllProduct();
      dispatch({
        type: GoodsActionTypes.FETCH_GOODS_SUCCESS,
        payload: response.goods,
      });
    } catch (error) {
      dispatch({
        type: GoodsActionTypes.FETCH_GOODS_ERROR,
        payload: "An error occurred while loading data.",
      });
    }
  };
};

export const fetchCatalog = (id:unknown) => {
  return async (dispatch: Dispatch<GoodsAction>): Promise<void> => {
    try {
      dispatch({ type: GoodsActionTypes.FETCH_GOODS });
      const response = await getProduct(id);
      console.log(response);
      dispatch({
        type: GoodsActionTypes.FETCH_GOODS_SUCCESS,
        payload: response.goods,
      });
    } catch (error) {
      dispatch({
        type: GoodsActionTypes.FETCH_GOODS_ERROR,
        payload: "An error occurred while loading data.",
      });
    }
  };
};

export const moveToProduct = (index: string) => {
  return (dispatch: Dispatch<GoodsAction>): void => {
    window.sessionStorage.setItem("sliderIndex", index);
    dispatch({
      type: GoodsActionTypes.GO_TO_PRODUCT,
    });
  };
};
