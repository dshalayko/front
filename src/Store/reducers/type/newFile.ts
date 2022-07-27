export interface NewFileState {
  file: File | string;
}

export interface SetNewFileAction {
  type: NewFileActionTypes;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any;
}

export enum NewFileActionTypes {
  SET_NEW_FILE = "SET_NEW_FILE",
}

export type NewFileActions = NewFileActionTypes;
