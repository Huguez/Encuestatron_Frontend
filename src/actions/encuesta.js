import { fetchToken } from "../helpers/fetch"
import { types } from "../types/types";

/// Asyncronas /////////////////////////

export const startSearchEncuesta = ( term ) => {
    return async ( dispatch ) => {
        try {
            
            const resp = await fetchToken( `v1/encuesta/${ term }/search` )
            const body = await resp.json()
            
            if ( body.ok ) {
                const { encuestas } = body
                dispatch( searchEncuetas( encuestas ) )
            }else{
                console.log( body )
            }
        } catch( error ) {
            console.error( "Error: startSearchEncuesta" )
            console.error( error )
        }
    }
}

export const startDeleteEncuesta = ( id ) =>{
    return async ( dispatch ) => {
        try {
            const resp = await fetchToken( `v1/encuesta/${ id }`, {}, 'DELETE' )
            const body = await resp.json()
            
            if ( body.ok ) {
                dispatch( borrarEncuesta( id ) )
            }else{
                console.log( body )
            }
        } catch (error) {
            console.error( "Error: startDeleteEncuesta" )
            console.error( error )
        }
    }
}

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

export const startCreateEncuesta = ( titulo, descripcion, opciones, activo = true, id_encuesta_prev = null, segunda_ronda = false ) => {
    return async ( dispatch, getState ) => {
        try {
            const { user:{ id:id_user_creator } } =  await getState().auth            
            const data = { titulo, descripcion, opciones, activo, id_user_creator, id_encuesta_prev, segunda_ronda }
            
            const resp = await fetchToken( 'v1/encuesta/', data, 'POST' );
            const body = await resp.json();
            
            if ( body.ok ) {
                const { encuesta } = body
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

const borrarEncuesta = ( id ) => ({
    type: types.encuestaDelete,
    payload: { id }
})

const crearEncuesta = ( encuesta ) => ({
    type: types.encuestaCreate,
    payload: encuesta
})

const searchEncuetas = ( lista ) => ({
    type: types.encuestaSearch,
    payload: {
        encuestas: [...lista]
    } 
})


export const loadEncuetas = ( lista ) => ({
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