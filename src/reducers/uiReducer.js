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
                openModal: true
            }
        case types.uiCloseModal:
            return {
                ...state,
                openModal: false
            }
        case types.uiSetMsgError:
            return {
                ...state,
                msgError: action.payload.msg
            }
        case types.uiCleanMsgError:
            return {
                ...state,
                msgError: null
            }
        default:
            return state
    }
}