import { IGoodsState, GoodsActionTypes, GoodsAction } from "./type/goods";
// import { IProduct } from "../../globalTypes";

const defaultState: IGoodsState = {
  goods: [],
  loading: false,
  error: null,
};

export default function goodsReducer(
  state = defaultState,
  action: GoodsAction
): IGoodsState {
  switch (action.type) {
    case GoodsActionTypes.FETCH_GOODS:
      return { loading: true, error: null, goods: [] };
    case GoodsActionTypes.FETCH_GOODS_SUCCESS:
      return { loading: false, error: null, goods: action.payload };
    case GoodsActionTypes.FETCH_GOODS_ERROR:
      return { loading: false, error: action.payload, goods: [] };
    case GoodsActionTypes.GO_TO_PRODUCT:
      return { loading: false, error: null, goods: state.goods };
    default:
      return state;
  }
}
