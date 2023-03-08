import axios from "axios";
import { ActionType } from "../action-types";
import { Dispatch } from "redux";
import { Action, Login } from "../actions";


export const searchRepositories = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_REPOSITORIES,
    });

    try {
      const { data } = await axios.get(
        `https://registry.npmjs.org/-/v1/search`,
        {
          params: {
            text: term,
          },
        }
      );
      const names = data.objects.map((result: any) => {
        return result.package.name;
      });

      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
        payload: names,
      });
    } catch (error: any) {
      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_ERROR,
        payload: error.message,
      });
    }
  };
};

export const login = (name: string, password: string) => {
  return async (dispatch: Dispatch<Login>) => {
    dispatch({
      type: ActionType.LOGIN_SUCCESSFUL,
      payload: { name, password },
    });
  };
};
