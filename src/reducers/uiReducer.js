import { types } from "../types/types";

const initialState = {
    openModal: false,
    msgError: null
}

export const uiReducer = ( state = initialState, action ) => {

    switch ( action.type ) {
        case types.uiOpenModal:
            return {
                ...state,
                ...action.payload
            }
        case types.uiCloseModal:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}