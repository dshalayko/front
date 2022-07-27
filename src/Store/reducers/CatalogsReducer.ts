import { ICatalogsState, CatalogsActionTypes, CatalogActions } from "./type/catalogs";
// import { IProduct } from "../../globalTypes";

const defaultState: ICatalogsState = {
  catalogs: [],
  loading: false,
  error: null,
};

export default function goodsReducer(
  state = defaultState,
  action: CatalogActions
): ICatalogsState {
  switch (action.type) {
    case CatalogsActionTypes.FETCH_GOODS:
      return { loading: true, error: null, catalogs: [] };
    case CatalogsActionTypes.FETCH_GOODS_SUCCESS:
      return { loading: false, error: null, catalogs: action.payload };
    case CatalogsActionTypes.FETCH_GOODS_ERROR:
      return { loading: false, error: action.payload, catalogs: [] };
    case CatalogsActionTypes.GO_TO_PRODUCT:
      return { loading: false, error: null, catalogs: state.catalogs };
    default:
      return state;
  }
}
