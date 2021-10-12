import { fetchToken } from "../helpers/fetch"
import { types } from "../types/types";

/// Asyncronas /////////////////////////

export const startCreateEncuesta = ( titulo, descripcion, opciones, activo = true  ) => {
    return async ( dispatch, getState ) => {
        try {
            const { user:{ id:id_creator } } =  await getState().auth            
            const data = { titulo, descripcion, opciones, activo, id_creator }
            const resp = await fetchToken( 'v1/encuesta/', data, 'POST' );
            const body = await resp.json();
            
            if ( body.ok ) {
                const {encuesta} = body
                dispatch( crearEncuesta( encuesta ) )
            }else{
                console.log( "dispatch para el error", body )
            }
        }catch( error ) {
            console.error("Error: startCreateEncuesta")
            console.error(error)
        }
    }
}


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

const crearEncuesta = ( encuesta ) => ({
    type: types.encuestaCreate,
    payload: encuesta
})

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