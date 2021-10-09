import { fetchToken } from "../helpers/fetch"
import { types } from "../types/types";

/// Asyncronas /////////////////////////

export const startLoadEncuestas = () => {
    return async ( dispatch ) => {
        try{
            const resp = await fetchToken( 'v1/encuesta' );
            const body = await resp.json();
            
            if ( body.ok ) { 
                
                const lista = [...Object.values( body.encuestas )  ]
                
                await dispatch( loadEncuetas( lista ) )
            }
        }catch( error ){
            console.log( "Error: startLoadEncuestas" )
            console.log( error )
        }
        
    }
}

export const startShowEncuesta = ( id ) => {
    return async ( dispatch ) =>{
        try {
            const resp = await fetchToken( `v1/encuesta/${ id }` );
            const body = await resp.json();
            
            if( body.ok ){
                const { encuesta:auxEncuesta } = body
                dispatch( showEncuesta( auxEncuesta ) )    
            }
            
        } catch ( error ) {
            console.log( "Error: startShowEncuesta" )
            console.log( error )
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

const showEncuesta = ( encuesta ) => ({
    type: types.encuestaShow,
    payload: { ...encuesta }
})

export const ClearShowEncuesta = () => ({
    type: types.encuestaRemoveShow,
})