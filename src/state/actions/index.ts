import { ActionType } from "../action-types";

interface SearchRepositories {
  type: ActionType.SEARCH_REPOSITORIES;
}
interface SearchRepositoriesSuccess {
  type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
}

interface SearchRepositoriesError {
  type: ActionType.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}

interface LoginSuccessful {
  type: ActionType.LOGIN_SUCCESSFUL;
  payload: { name: string; password: string };
}

interface LoginError {
  type: ActionType.LOGIN_ERROR;
  payload: string;
}

interface LoginTry {
  type: ActionType.LOGIN_TRY;
}

export type Action =
  | SearchRepositories
  | SearchRepositoriesSuccess
  | SearchRepositoriesError;

export type Login = LoginSuccessful | LoginError | LoginTry;
