import { ICheckoutState } from "./type/checkout";

const defaultState: ICheckoutState = {
  quantity: 0,
};

export default function checkoutReducer(
  state = defaultState,
): ICheckoutState {
  return state;
}

