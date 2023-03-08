import { Login } from "../actions";
import { ActionType } from "../action-types";

const initalState = {
  name: "",
  password: "",
};

const reducer = (state = initalState, action: Login) => {
  switch (action.type) {
    case ActionType.LOGIN_SUCCESSFUL:
      return { loading: null, error: null, data: action.payload };
    case ActionType.LOGIN_ERROR:
      return { loading: null, error: "error", data: [] };
    case ActionType.LOGIN_TRY:
      return { loading: true, error: null, data: [] };
    default:
      return state;
  }
};

export default reducer;
