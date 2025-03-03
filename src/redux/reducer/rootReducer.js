import { combineReducers } from "redux";
import countReducer from "./countReducer";
import authReducer from "./authReducer";

export const rootReducer = combineReducers({
    Auth: authReducer,
    Count: countReducer,
});