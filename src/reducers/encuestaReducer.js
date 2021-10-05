import { types } from "../types/types";

const initialState = {
    encuestas: []
}

export const encuestasReducer = ( state = initialState, action) => {

    switch ( action.type ) {
        case types.encuestaLoad:
            return {
                ...state,
                ...action.payload
            }
    
        default:

            return state;
    }

}