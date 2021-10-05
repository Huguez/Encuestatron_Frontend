import { types } from "../types/types";
import { fetchSinToken, fetchToken } from "../helpers/fetch";
import { startLoading, endLoading } from "./ui";

import { startLoadEncuestas }  from './encuesta'

// Asyncronas //////////

export const startLogin = ( email, password ) => {
    return async ( dispatch ) =>{

        const resp = await fetchSinToken( 'v1/session/login', { email, password }, 'POST' );
        const body = await resp.json();
        const { uidtkn:token, user } = body;
        
        if( user ){
            localStorage.setItem( 'uidtkn', token )
            localStorage.setItem( 'uidtkn-init-date', new Date().getTime() )
            dispatch( login( user ) )
        }else{
            console.log("Error: startLogin")
            console.log( body )
        }
    }
}

export const startRegister = ( name, email, password, role = "usuario" ) => {
    return async ( dispatch ) => {
        const resp = await fetchSinToken( 'v1/session/register', { name, email, password, role }, 'POST' );
        const body = await resp.json();
        const { uidtkn:token, user } = body;
        
        if( user ){
            localStorage.setItem( 'uidtkn', token )
            localStorage.setItem( 'uidtkn-init-date', new Date().getTime() )
            dispatch( register( user ) )
        }else{
            console.log( "Error: startRegister" )
            console.log( body )
        }

    }
}

export const startChecking = () => {
    return async ( dispatch ) => {
        dispatch( startLoading() )
        const resp = await fetchToken( 'v1/session/renew' )
        const body = await resp.json();
        const { uidtkn:token, user } = body;

        if( !!user ){
            localStorage.setItem( 'uidtkn', token )
            localStorage.setItem( 'uidtkn-init-date', new Date().getTime() )

            dispatch( endLoading() )

            await dispatch( startLoadEncuestas() )
            await dispatch( renew( user ) )

        }else{
            console.log( "Error: startChecking" )
            console.log( body )
            dispatch( endLoading() )
        }
    }
}

export const startLogout = () => {
    return async ( dispatch ) => {
        await dispatch( startLoading() )
        localStorage.clear();
        dispatch( logout() )
        await dispatch( endLoading() )
    }
}



// Syncronas ///////////

const login = ( user ) => ({
    type: types.authLogin,
    payload: { user, logged: true }
} )

const register = ( user ) => ( {
    type: types.authRegister,
    payload: { user, logged: true }
} )

const renew = ( user ) => ( {
    type: types.authRenovarToken,
    payload: { user, logged: true }
} )

const logout = () => ({
    type: types.authLogout
} )