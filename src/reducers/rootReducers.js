import { combineReducers } from "redux";
import { authReducer } from './authReducer'
import { encuestasReducer } from "./encuestaReducer";
import { uiReducer } from "./uiReducer";

export const rootReducer = combineReducers({
    auth: authReducer,
    survey: encuestasReducer,
    ui: uiReducer,
});

