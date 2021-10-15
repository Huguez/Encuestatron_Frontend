import { fetchToken } from "../helpers/fetch"
import { types } from "../types/types";

/// Asyncronas /////////////////////////

export const startEncuestasAct = ( id ) => {
    return async ( dispatch, getState ) => {
        try{
            
            const { encuestas } = await  getState().survey
            const e = encuestas.filter( item => item.id === id )
            let data = { ...e[0] }
            data["activo"] = !data["activo"]
            
            const resp = await fetchToken( `v1/encuesta/${ id }`, data, 'PUT' );
            const body = await resp.json();
            
            if ( body.ok ) {
                const { encuesta } = body
                
                dispatch( ( activarEncuesta( encuesta ) ) )   

            } else {
                console.error( body )    
            }
        }catch( error ){
            console.error( "Error: startLoadEncuestasUser" )
            console.error( error )
        }
    }
}


export const startCreateEncuesta = ( titulo, descripcion, opciones, activo = true  ) => {
    return async ( dispatch, getState ) => {
        try {
            const { user:{ id:id_user_creator } } =  await getState().auth            
            const data = { titulo, descripcion, opciones, activo, id_user_creator }
            
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
            }else{
                dispatch( clearEncuestaGraph() )
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

const activarEncuesta = ( encuesta ) => ({
    type: types.encuestaActive,
    payload: encuesta 
})

export const clearShowEncuesta = () => ({
    type: types.encuestaRemoveShow,
})

export const clearEncuestaGraph = () =>({
    type: types.encuestaClearGraph,
})