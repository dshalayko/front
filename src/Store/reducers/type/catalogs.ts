import { ICategory } from "../../../globalTypes";

export interface ICatalogsState {
  catalogs: ICategory[];
  loading: boolean;
  error: null | string;
}

export enum CatalogsActionTypes {
  FETCH_GOODS = "FETCH_GOODS",
  FETCH_GOODS_SUCCESS = "FETCH_GOODS_SUCCESS",
  FETCH_GOODS_ERROR = "FETCH_GOODS_ERROR",
  GO_TO_PRODUCT = "GO_TO_PRODUCT",
}

interface IFetchCatalogsAAction {
  type: CatalogsActionTypes.FETCH_GOODS;
}
interface IFetchCatalogsASuccessAction {
  type: CatalogsActionTypes.FETCH_GOODS_SUCCESS;
  payload: ICategory[];
}
interface IFetchCatalogsAErrorAction {
  type: CatalogsActionTypes.FETCH_GOODS_ERROR;
  payload: string;
}
interface IMoveToCategoryAction {
  type: CatalogsActionTypes.GO_TO_PRODUCT;
}

export type CatalogActions =
  | IFetchCatalogsAAction
  | IFetchCatalogsASuccessAction
  | IFetchCatalogsAErrorAction
  | IMoveToCategoryAction;
