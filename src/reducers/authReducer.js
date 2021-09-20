import { types } from "../types/types";


const initialState = {
    user: null,
    logged: false
}

export const authReducer = ( state = initialState , action ) => {
    switch( action.type ){
        
        case types.login:
            return {
                ...action.payload,
                logged: true
            };

        case types.logout:
            return {
                logged: false
            };

        case types.register:
            return {
                ...action.payload,
                logged: true
            };

        default: 
            return initialState
    }
}