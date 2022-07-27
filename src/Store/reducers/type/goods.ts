import { IProduct } from "../../../globalTypes";

export interface IGoodsState {
  goods: IProduct[];
  loading: boolean;
  error: null | string;
}

export enum GoodsActionTypes {
  FETCH_GOODS = "FETCH_GOODS",
  FETCH_GOODS_SUCCESS = "FETCH_GOODS_SUCCESS",
  FETCH_GOODS_ERROR = "FETCH_GOODS_ERROR",
  GO_TO_PRODUCT = "GO_TO_PRODUCT",
}

interface IFetchGoodsAction {
  type: GoodsActionTypes.FETCH_GOODS;
}
interface IFetchGoodsSuccessAction {
  type: GoodsActionTypes.FETCH_GOODS_SUCCESS;
  payload: IProduct[];
}
interface IFetchGoodsErrorAction {
  type: GoodsActionTypes.FETCH_GOODS_ERROR;
  payload: string;
}
interface IMoveToProductAction {
  type: GoodsActionTypes.GO_TO_PRODUCT;
}

export type GoodsAction =
  | IFetchGoodsAction
  | IFetchGoodsSuccessAction
  | IFetchGoodsErrorAction
  | IMoveToProductAction;
