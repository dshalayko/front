import { Dispatch } from "redux";
import { AuthActions, AuthActionType } from "../reducers/type/auth";

export const setIsAuthTrue = () => {
  return (dispatch: Dispatch<AuthActions>): void => {
    dispatch({
      type: AuthActionType.SET_AUTH_TRUE,
    });
  };
};

export const setIsAuthFalse = () => {
  return (dispatch: Dispatch<AuthActions>): void => {
    dispatch({
      type: AuthActionType.SET_AUTH_FALSE,
    });
  };
};

export const setIsAdminFalse = () => {
  return (dispatch: Dispatch<AuthActions>): void => {
    dispatch({
      type: AuthActionType.SET_ADMIN_FALSE,
    });
  };
};

export const setIsAdminTrue = () => {
  return (dispatch: Dispatch<AuthActions>): void => {
    dispatch({
      type: AuthActionType.SET_ADMIN_TRUE,
    });
  };
};
