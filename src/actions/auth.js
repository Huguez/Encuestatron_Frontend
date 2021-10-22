import Swal from 'sweetalert2'

import { types } from "../types/types";
import { fetchSinToken, fetchToken } from "../helpers/fetch";

// Asyncronas //////////

export const startLogin = ( email, password ) => {
    return async ( dispatch ) =>{
        try {
            const resp = await fetchSinToken( 'v1/session/login', { email, password }, 'POST' );
            const body = await resp.json();
            
            if( body.ok ){
                const { uidtkn:token, user } = body;
                localStorage.setItem( 'uidtkn', token )
                localStorage.setItem( 'uidtkn-init-date', new Date().getTime() )

                dispatch( login( user ) )
            }else{
                console.error("Error: startLogin")
                Swal.fire( {
                    icon: 'error',
                    title: 'Oops...',
                    text: body.error
                } )
            }
        }catch( error ){
            console.error("Error: startLogin")
            console.error( error )
        }
    }
}

export const startRegister = ( name, email, password, role = "usuario" ) => {
    return async ( dispatch ) => {
        try {
            const resp = await fetchSinToken( 'v1/session/register', { name, email, password, role }, 'POST' );
            const body = await resp.json();
            
            if( body.ok ){
                const { uidtkn:token, user } = body;

                localStorage.setItem( 'uidtkn', token )
                localStorage.setItem( 'uidtkn-init-date', new Date().getTime() )
                dispatch( register( user ) )
            }else{
                console.error( "Error: startRegister" )
                Swal.fire( {
                    icon: 'error',
                    title: 'Oops...',
                    text: body.error
                } );
            }
        }catch( error ){
            console.error( "Error: startRegister" )
            console.error( error )
        }
    }
}

export const startChecking = () => {
    return async ( dispatch ) => {
        try {
            const resp = await fetchToken( 'v1/session/renew' )
            const body = await resp.json();
            
            if( body.ok ){
                const { uidtkn:token, user } = body;
                localStorage.setItem( 'uidtkn', token )
                localStorage.setItem( 'uidtkn-init-date', new Date().getTime() )
    
                dispatch( renew( user ) )
            }else{
                dispatch( checkingFinish() )
            }    
        } catch( error ) {
            console.error( "Error: startChecking" );
            console.error( error );
        }
    }
}

export const startLogout = () => {
    return async ( dispatch ) => {
        localStorage.clear();
        dispatch( logout() )
    }
}



// Syncronas ///////////

export const login = ( user ) => ({
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

const checkingFinish = () => ({
    type: types.authFinChecking
} )

const logout = () => ({
    type: types.authLogout
} )