import { INavState, NavbarActionTypes, NavbarActions } from "./type/navbar";
const defaultState: INavState = {
  cartCollor: "white",
  hamburgerColor: "#4A9B57",
  isVisible: true,
};

export default function navbarReducer(
  state = defaultState,
  action: NavbarActions
): INavState {
  switch (action.type) {
    case NavbarActionTypes.SET_WHITE_COLOR:
      return {
        ...state,
        cartCollor: "white",
        hamburgerColor: "#4A9B57",
      };
    case NavbarActionTypes.SET_GREEN_COLOR:
      return {
        ...state,
        cartCollor: "#4A9B57",
        hamburgerColor: "#4A9B57",
      };

    case NavbarActionTypes.SET_VISIBLE_TRUE:
      return {
        ...state,
        isVisible: true,
      };
    case NavbarActionTypes.SET_VISIBLE_FALSE:
      return {
        ...state,
        isVisible: false,
      };
    default:
      return state;
  }
}
