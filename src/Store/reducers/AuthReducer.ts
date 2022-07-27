import { AuthActionType, IAuthState, AuthActions } from "./type/auth";
const defaultState: IAuthState = {
  isAuth: false,
  isAdmin: false,
};

export default function authReducer(
  state = defaultState,
  action: AuthActions
): IAuthState {
  switch (action.type) {
    case AuthActionType.SET_AUTH_TRUE: {
      return {
        ...state,
        isAuth: true,
      };
    }
    case AuthActionType.SET_AUTH_FALSE:
      return {
        ...state,
        isAuth: false,
      };
    case AuthActionType.SET_ADMIN_TRUE:
      return {
        ...state,
        isAdmin: true,
      };
    case AuthActionType.SET_ADMIN_FALSE:
      return {
        ...state,
        isAdmin: false,
      };
    default:
      return state;
  }
}
