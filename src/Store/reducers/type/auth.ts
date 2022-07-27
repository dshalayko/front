export enum AuthActionType {
  SET_AUTH_TRUE = "SET_AUTH_TRUE",
  SET_AUTH_FALSE = "SET_AUTH_FALSE",
  SET_ADMIN_TRUE = "SET_ADMIN_TRUE",
  SET_ADMIN_FALSE = "SET_ADMIN_FALSE",
}
export interface IAuthState {
  isAuth: boolean;
  isAdmin: boolean;
}

interface setIsAuth {
  type: AuthActionType;
}

export type AuthActions = setIsAuth;
