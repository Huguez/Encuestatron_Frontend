import { combineReducers } from "redux";
import { authReducer } from './authReducer'
import { encuestasReducer } from "./encuestaReducer";
import { uiReducer } from "./uiReducer";
import { usuarioReducer } from "./usuariosReducers";
import { votoReducer } from "./votoReducer";

export const rootReducer = combineReducers({
    auth: authReducer,
    survey: encuestasReducer,
    ui: uiReducer,
    vote: votoReducer,
    usuarios: usuarioReducer
});

