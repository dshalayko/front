import { Dispatch } from "redux";
import { ManagersAction, ManagersActionTypes } from "../reducers/type/manager";
import { getAllManagers } from "../../API/managerAPI";

export const fetchManagers = () => {
  return async (dispatch: Dispatch<ManagersAction>): Promise<void> => {
    try {
      dispatch({ type: ManagersActionTypes.FETCH_MANAGERS });
      const response = await getAllManagers();
      dispatch({
        type: ManagersActionTypes.FETCH_MANAGERS_SUCCESS,
        payload: response,
      });
    } catch (error) {
      dispatch({
        type: ManagersActionTypes.FETCH_MANAGERS_ERROR,
        payload: "An error occurred while loading data.",
      });
    }
  };
};
