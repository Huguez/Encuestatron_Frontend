import { types } from "../types/types";

const initialState = {
    loading: true
}

export const uiReducer = ( state = initialState, action ) => {

    switch ( action.type ) {
        case types.uiStartLoading:
            return {
                ...state,
                ...action.payload
            }
        case types.uiEndLoading:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}