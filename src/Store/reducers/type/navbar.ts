export interface INavState {
  cartCollor: string;
  hamburgerColor: string;
  isVisible: boolean;
}

interface SetNavbarColor {
  type: string;
}

export enum NavbarActionTypes {
  SET_WHITE_COLOR = "SET_WHITE_COLOR",
  SET_GREEN_COLOR = "SET_GREEN_COLOR",
  SET_VISIBLE_TRUE = "SET_VISIBLE_TRUE",
  SET_VISIBLE_FALSE = "SET_VISIBLE_FALSE",
}

export type NavbarActions = SetNavbarColor;
