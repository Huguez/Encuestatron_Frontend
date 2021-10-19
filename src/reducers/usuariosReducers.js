import { types } from "../types/types";

const initialState = {
    listaUsuarios: [],
}

export const usuarioReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case types.usuarioLoad:
            return {
                ...state,
                listaUsuarios: [ ...action.payload ]
            }
        case types.usuarioChangeRol:
            const i = state.listaUsuarios.findIndex( item => item.id === action.payload.user.id )
            state.listaUsuarios[i] = { ...action.payload.user }

            return {
                ...state,
                listaUsuarios: [ ...state.listaUsuarios ]
            }
        case types.usuarioDelete:
            return {
                ...state,
                listaUsuarios: [ ...state.listaUsuarios.filter( item => item.id !== action.payload.id ) ]
            }
        default:
            return state
    }
}