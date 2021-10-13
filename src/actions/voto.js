import { fetchToken } from "../helpers/fetch";
import { types } from "../types/types";

// Asyncronas ///////////////////////////////////////////

export const startCheckingVotoAsoc = ( id_encuesta )=>{
    return async ( dispatch, getState ) => {
        try {
            const {  user:{ id:id_votante }  } = await getState().auth
            const endpoint = `v1/voto/asoc/${ id_votante }/${ id_encuesta }`
            
            const resp = await fetchToken( endpoint )
            const body = await resp.json()

            if( body.ok ){
                dispatch( ChecarVotacion() )
            }else{
                dispatch( finChecarVotacion() )
            }
        } catch ( error ) {
            console.error( "Error: startCheckingVotoAsoc" )
            console.error( error );
        }
    }
}


export const startEnviarVoto = ( opcion, id_encuesta ) => {
    return async ( dispatch, getState ) => {
        try {
            const {  user:{ id:id_votante }  } = await getState().auth
            const data = { opcion, id_votante, id_encuesta }

            const resp = await fetchToken( 'v1/voto/', data, 'POST' )
            const body = await resp.json()

            if ( body.ok ) {
                dispatch( votar() )
            }else{
                dispatch( finChecarVotacion() )
            }
        } catch (error) {
            console.error( "Error: startEnviarVoto" )
            console.error( error );
        }
    }
}

// Syncronas ///////////////////////////////////////////

const votar = () => ({
    type: types.votoEnviarOpcion,
})

const ChecarVotacion = () => ({
    type: types.votoAsoc,
});

const finChecarVotacion = () => ({
    type: types.votoFinishChecking
});

export const limpiarStateVote = () => ({
    type: types.votoClearState
});