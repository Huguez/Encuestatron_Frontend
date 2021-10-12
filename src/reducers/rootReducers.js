import { combineReducers } from "redux";
import { authReducer } from './authReducer'
import { encuestasReducer } from "./encuestaReducer";
import { uiReducer } from "./uiReducer";
import { votoReducer } from "./votoReducer";

export const rootReducer = combineReducers({
    auth: authReducer,
    survey: encuestasReducer,
    ui: uiReducer,
    vote: votoReducer
});

