import { types } from "../types/types";

const initialState = {
    encuestas: [],
    show: null,
    loadingGraph: true,
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
                loadingGraph: false,
                show: { ...action.payload }
            }
        case types.encuestaRemoveShow:
            return{
                ...state,
                loadingGraph: true,
                show: null,
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
        case types.encuestaRemoveGraph:
            return {
                ...state,
                loadingGraph: true,
            }
        case types.encuestaClearGraph:
            return {
                ...state,
                loadingGraph: false,
            }
        case types.encuestaDelete:
            return {
                ...state,
                encuestas: [ ...state.encuestas.filter( item => item.id !== action.payload.id )  ]
            }
        default:
            return state;
    }

}