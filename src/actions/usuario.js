import { types } from "../types/types";
import { fetchToken } from '../helpers/fetch'

/// Asyncronas /////////////////////////////////

export const startChangeRoleUsuario = ( usuario ) => {
    return async ( dispatch ) => {
        try {
            const data = { ...usuario, role: usuario.role === 'ADMIN' ? 'usuario' : 'ADMIN' }

            const resp = await fetchToken( `v1/user/${ usuario.id }`, data, 'PUT' )
            const body = await resp.json()

            if ( body.ok ) {
                const { usuario } = body
                
                dispatch( cambiarRolUsuario( usuario ) )
            } else {
                console.log( body )
            }
        }catch( error ){
            console.error( "error: startDeleteUsuario" )
            console.error( error )
        }
    }
}

export const startDeleteUsuario = ( id ) => {
    return async ( dispatch ) => {
        try {
            const url = `v1/user/${ id }`
            const resp = await fetchToken( url, {}, 'DELETE' )
            const body = await resp.json()

            if ( body.ok ) {
                const { user:{ id } } = body

                dispatch( borrarUsuario( id ) )
            }else{
                console.log( body )
            }
        }catch( error ){
            console.error( "error: startDeleteUsuario" )
            console.error( error )
        }
    }
}

export const startLoadUsuarios = () => {
    return async ( dispatch ) =>{
        try {
            const resp = await fetchToken( 'v1/user' )
            const body = await resp.json()

            if ( body.ok ) {
                const { usuarios } = body

                dispatch( cargarUsuarios( usuarios ) )
            } else {
                console.log( body )
            }
        } catch( error ){
            console.error( "error: startLoadUsuarios" )
            console.error( error )
        }
    }
}


/// Syncronas /////////////////////////////////

const cambiarRolUsuario = ( user ) => ({
    type: types.usuarioChangeRol,
    payload: {
        user
    }
})

const borrarUsuario = ( id ) => ({
    type: types.usuarioDelete,
    payload: {
        id
    }
})

const cargarUsuarios = ( usuarios ) => ({
    type: types.usuarioLoad,
    payload: usuarios
})
