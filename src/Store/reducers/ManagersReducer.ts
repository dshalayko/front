import {
  IManagersState,
  ManagersActionTypes,
  ManagersAction,
} from "./type/manager";

const defaultState: IManagersState = {
  managers: [],
  loading: false,
  error: null,
};

export default function managersReducer(
  state = defaultState,
  action: ManagersAction
): IManagersState {
  switch (action.type) {
    case ManagersActionTypes.FETCH_MANAGERS:
      return { loading: true, error: null, managers: [] };
    case ManagersActionTypes.FETCH_MANAGERS_SUCCESS:
      return { loading: false, error: null, managers: action.payload };
    case ManagersActionTypes.FETCH_MANAGERS_ERROR:
      return { loading: false, error: action.payload, managers: [] };

    default:
      return state;
  }
}
