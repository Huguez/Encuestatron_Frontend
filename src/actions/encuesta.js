import { fetchToken } from "../helpers/fetch"
import { types } from "../types/types";


/// Asyncronas /////////////////////////

export const startLoadEncuestas = () => {
    return async ( dispatch, getState ) => {
        const resp = await fetchToken( 'v1/encuesta' );
        const body = await resp.json();
        const lista = [...Object.values( body )  ]
        
        if ( lista.length > 0 ) { 
            await dispatch( loadEncuetas( lista ) )
        }else{
            console.log( "Error: startLoadEncuestas" )
            console.log( body )
        }
    }
}

/// Syncronas //////////////////////////

const loadEncuetas = ( lista ) => ({
    type: types.encuestaLoad,
    payload: {
        encuestas: [...lista]
    } 
})