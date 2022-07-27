import {
  NewFileState,
  NewFileActionTypes,
  SetNewFileAction,
} from "./type/newFile";

const defaultState: NewFileState = {
  file: "",
};

export default function newFileReducer(
  state = defaultState,
  action: SetNewFileAction
): NewFileState {
  switch (action.type) {
    case NewFileActionTypes.SET_NEW_FILE:
      return {
        ...state,
        file: action.payload,
      };

    default:
      return state;
  }
}
