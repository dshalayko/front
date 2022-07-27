import { Dispatch } from "redux";
import { NewFileActionTypes, SetNewFileAction } from "../reducers/type/newFile";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const setNewFile = (file: File | string) => {
  return (dispatch: Dispatch<SetNewFileAction>): void => {
    dispatch({ type: NewFileActionTypes.SET_NEW_FILE, payload: file });
  };
};
