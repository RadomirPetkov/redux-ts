import { combineReducers } from "redux";
import repositoryReducers from "./repositoryReducers"
import loginReducers from "./loginReducers"


const reducers = combineReducers({
    repositories: repositoryReducers,
    login: loginReducers
})

export default reducers