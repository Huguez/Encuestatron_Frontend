import { types } from "../types/types";

const initialState = {
    encuestas: [],
    show: null
}

export const encuestasReducer = ( state = initialState, action) => {
    let arreglo = []
    switch ( action.type ) {
        case types.encuestaLoad:
            return {
                ...state,
                ...action.payload,
            }
        case types.encuestaShow:
            return{
                ...state,
                show: { ...action.payload }
            }
        case types.encuestaRemoveShow:
            return{
                ...state,
                show: null
            }
        case types.encuestaCreate:
            arreglo = [ ...state.encuestas ]
            arreglo.push( action.payload )
            return {
                ...state,
                encuestas: [ ...arreglo ]
            }
        case types.encuestaActive:
            let i = state.encuestas.findIndex( item => item.id === action.payload.id )
            state.encuestas[i] = { ...action.payload }
            return {
                ...state,
            }
        default:
            return state;
    }

}