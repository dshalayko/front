import { Dispatch } from "redux";
import { CatalogActions, CatalogsActionTypes } from "../reducers/type/catalogs";
import { getAllCategories } from "../../API/catalogAPI";

export const fetchCatalogs = () => {
  return async (dispatch: Dispatch<CatalogActions>): Promise<void> => {
    try {
      dispatch({ type: CatalogsActionTypes.FETCH_GOODS });
      const response = await getAllCategories();
      dispatch({
        type: CatalogsActionTypes.FETCH_GOODS_SUCCESS,
        payload: response.catalogs,
      });
    } catch (error) {
      dispatch({
        type: CatalogsActionTypes.FETCH_GOODS_ERROR,
        payload: "An error occurred while loading data.",
      });
    }
  };
};

// export const moveToProduct = (index: string) => {
//   return (dispatch: Dispatch<CatalogActions>): void => {
//     window.sessionStorage.setItem("sliderIndex", index);
//     dispatch({
//       type: CatalogsActionTypes.GO_TO_PRODUCT,
//     });
//   };
// };
