import { types } from "../types/types";


const initialState = {
    checking: true,
    user: {},
    logged: false
}

export const authReducer = ( state = initialState , action ) => {
    switch( action.type ){
        case types.authRenovarToken:
        case types.authRegister:
        case types.authLogin:
            return {
                ...state, 
                ...action.payload,
                logged: true,
                checking: false,
            };

        case types.authLogout:
            return {
                ...state,
                logged: false,
            };
        case types.authFinChecking:
            return {
                ...state, 
                checking: false,
            }
        
        default: 
            return state
    }
}