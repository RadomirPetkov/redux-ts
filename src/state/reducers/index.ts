import { combineReducers } from "redux";
import repositoryReducers from "./repositoryReducers"


const reducers = combineReducers({
    repositories: repositoryReducers
})

export default reducers