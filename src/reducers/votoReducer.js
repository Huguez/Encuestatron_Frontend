import { types } from "../types/types";

const initialState = {
    checkingVoto: false,
    loadingVoto: true,
    votos: [],
}

export const votoReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case types.votoLoad:
            return {
                ...state,
                votos: [ ...action.payload ]
            }
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
        case types.votoClearState:
            return {
                ...state,
                checkingVoto: false,
                loadingVoto: true
            }
        default:
            return state
    }
}

