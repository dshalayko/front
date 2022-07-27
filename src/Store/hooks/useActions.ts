import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import ActionsCreators from "../action-creators/";

export const useActions = (): typeof ActionsCreators => {
  const dispatch = useDispatch();
  return bindActionCreators(ActionsCreators, dispatch);
};
