import { types } from "../types/types";


const initialState = {
    user: {},
    logged: false
}

export const authReducer = ( state = initialState , action ) => {
    switch( action.type ){
        
        case types.authLogin:
            return {
                ...action.payload,
                logged: true
            };

        case types.authLogout:
            return {
                ...initialState,
                logged: false
            };

        case types.authRegister:
            return {
                ...action.payload,
                logged: true
            };
        
        case types.authRenovarToken:
            return {
                ...action.payload,
                logged: true
            };
        
        default: 
            return initialState
    }
}