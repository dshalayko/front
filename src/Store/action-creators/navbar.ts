import { Dispatch } from "redux";
import { NavbarActions, NavbarActionTypes } from "../reducers/type/navbar";

export const setWhiteColor = () => {
  return (dispatch: Dispatch<NavbarActions>): void => {
    dispatch({
      type: NavbarActionTypes.SET_WHITE_COLOR,
    });
  };
};

export const setGreenColor = () => {
  return (dispatch: Dispatch<NavbarActions>): void => {
    dispatch({
      type: NavbarActionTypes.SET_GREEN_COLOR,
    });
  };
};

export const setVisibleTrue = () => {
  return (dispatch: Dispatch<NavbarActions>): void => {
    dispatch({
      type: NavbarActionTypes.SET_VISIBLE_TRUE,
    });
  };
};
export const setVisibleFalse = () => {
  return (dispatch: Dispatch<NavbarActions>): void => {
    dispatch({
      type: NavbarActionTypes.SET_VISIBLE_FALSE,
    });
  };
};
