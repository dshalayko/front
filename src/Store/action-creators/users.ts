import { Dispatch } from "redux";
import { UsersAction, UsersActionTypes } from "../reducers/type/users";
import { getUnverifiedUsers } from "../../API/userAPI";

export const fetchUsers = () => {
  return async (dispatch: Dispatch<UsersAction>): Promise<void> => {
    try {
      dispatch({ type: UsersActionTypes.FETCH_USERS });
      const response = await getUnverifiedUsers();
      dispatch({
        type: UsersActionTypes.FETCH_USERS_SUCCESS,
        payload: response,
      });
    } catch (error) {
      dispatch({
        type: UsersActionTypes.FETCH_USERS_ERROR,
        payload: "An error occurred while loading data.",
      });
    }
  };
};
