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
            arreglo = state.encuestas.filter( item => item.id !== action.payload.id )
            arreglo.push( action.payload )
            return {
                ...state,
                encuestas: [ ...arreglo ]
            }
        default:
            return state;
    }

}