import React from 'react'
import { useHistory } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'

import { startDeleteEncuesta, startShowEncuesta, startEncuestasAct } from '../../../actions/encuesta'
import { openModal } from '../../../actions/ui'


import moment from 'moment'
import 'moment/locale/es-mx'

moment.locale('es')

export const MisEncuestas = () => {

    const { survey:{ encuestas } } = useSelector( state => state )
    const { auth:{ user:{ id } } } = useSelector( state => state )
    const history = useHistory()

    const dispatch = useDispatch()

    const encuestasUser = encuestas.filter( item => item.id_user_creator === id )
    
    const handleActiveSurvey = ( id ) => {
        dispatch( startEncuestasAct( id ) )
    }

    const handleClickRoute = ( item ) => {
        if ( item.activo ) {
            history.replace( `/show/${ item.id }/encuesta/` )
        }else{
            history.replace( `/encuesta/${ item.id }/grafica/` )
        }
    }

    const handleCrearSegundaRonda = ( id ) => {
        dispatch( startShowEncuesta( id ) )
        dispatch( openModal() )
    }

    const handleDeleteEncuesta = ( item ) => {
        dispatch( startDeleteEncuesta( item.id ) )
    }

    const handleUpdateEncuesta = ( { id } ) => {
        alert( `Se actualizara la encuesta: ${ id }` )
    }

    if ( encuestasUser.length === 0 ) {
        return (
            <div className="row" >
                <div className="col">
                    <div className="alert alert-warning w-50 m-auto" role="alert">
                        <h4 className="alert-heading"> 
                        <i className="bi bi-exclamation-diamond-fill mx-2"></i>
                            ¡Espera!
                        </h4>
                        <hr />
                        <p className="mb-0">
                            Aun no haz creado ninguna encuesta
                        </p>     
                    </div>
                </div>
            </div>
        )
    }
    
    return (
        <div className="row">
            <div className="col" >
                <table className="table table-bordered">
                    <thead className="table-primary">
                        <tr>
                            <th className="text-center" scope="col">#</th>
                            <th className="text-center" scope="col">Titulo</th>
                            <th className="text-center" scope="col">Descripcion</th>
                            <th className="text-center" scope="col">Creacion</th>
                            <th className="text-center" scope="col">2da Ronda</th>
                            <th className="text-center" scope="col">Abierta</th>
                            <th className="text-center" scope="col">Activo</th>
                            <th className="text-center" scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        { encuestasUser.map( ( item, index ) => {
                            return (
                                <tr key={ index } className="table-light text-capitalize">
                                    <th className="text-center"  scope="row">{ index }</th>
                                    <td className="text-center" onClick={ (e) => handleClickRoute( item ) } style={ { cursor: 'pointer' } } >
                                        <span className="nav-link">
                                            { item.titulo }
                                        </span> 
                                    </td>
                                    <td className="text-center" > { item.descripcion } </td>
                                    <td className="text-center" > {  moment( item.created_at ).format( 'D/M/YYYY' ) } </td>
                                    <td className="text-center" > 
                                        <i className={ `fs-3 bi bi${  item.segunda_ronda ? "-check-lg text-primary" : "-x-lg text-secondary "  }` }></i>
                                    </td>
                                    <td className="text-center">
                                        { item.abierta && <i className="fs-3 bi bi-check-lg text-primary"></i> }  
                                    </td>
                                    <td className="text-center" onClick={ ( e ) => handleActiveSurvey( item.id ) } >
                                        <i className={ `fs-3 bi bi-toggle-${ item.activo ? "on link-success": "off link-danger " }` }></i>
                                    </td>
                                    <td className="text-center"  >
                                        { !item.segunda_ronda && <button onClick={ ( e ) => handleCrearSegundaRonda( item.id ) }  disabled={ item.activo  } className="btn btn-secondary p-1 mx-1"> Segunda Ronda </button> }
                                        
                                        <button className="btn btn-danger  mx-1" onClick={ ( e ) => handleDeleteEncuesta( item ) }>
                                            <i className="bi bi-trash-fill"></i>
                                        </button>

                                        <button disabled={ !item.activo  } className="btn btn-info  mx-1" onClick={ ( e ) => handleUpdateEncuesta( item ) }>
                                            <i className="bi bi-arrow-repeat"></i>
                                        </button>

                                    </td>
                                </tr>
                            )
                        } ) }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
