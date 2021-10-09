import { types } from "../types/types";

const initialState = {
    encuestas: [],
    show: null
}

export const encuestasReducer = ( state = initialState, action) => {

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
        default:
            return state;
    }

}