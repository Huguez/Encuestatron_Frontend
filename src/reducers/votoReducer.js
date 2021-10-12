import { types } from "../types/types";

const initialState = {
    checkingVoto: false,
    loadingVoto: true
}

export const votoReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case types.votoAsoc:
        case types.votoEnviarOpcion:
            return {
                ...state,
                checkingVoto: true,
                loadingVoto: false
            }
        
        case types.votoFinishChecking:
            return {
                ...state,
                checkingVoto: false,
                loadingVoto: false
            }
        default:
            return state
    }
}

