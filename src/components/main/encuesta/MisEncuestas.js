import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { startEncuestasAct } from '../../../actions/encuesta'

import moment from 'moment'
import 'moment/locale/es-mx'

moment.locale('es')



export const MisEncuestas = () => {

    const { survey:{ encuestas } } = useSelector( state => state )
    const { auth:{ user:{ id } } } = useSelector( state => state )

    const dispatch = useDispatch()

    const encuestasUser = encuestas.filter( item => item.id_user_creator === id )
    
    const handleActiveSurvey = ( id ) => {
        dispatch( startEncuestasAct( id ) )
    }
    
    return (
        <div className="row">
            <div className="col" >
                { encuestasUser.length === 0 ?  
                <div className="alert alert-warning w-50 m-auto" role="alert">
                    <h4 className="alert-heading"> 
                    <i class="bi bi-exclamation-diamond-fill mx-2"></i>
                        ¡Espera!
                    </h4>
                    <hr />
                    <p className="mb-0">
                        Aun no haz creado ninguna encuesta
                    </p>     
                </div>
                :
                <table className="table table-bordered">
                    <thead className="table-primary">
                        <tr>
                            <th className="text-center" scope="col">#</th>
                            <th className="text-center" scope="col">Titulo</th>
                            <th className="text-center" scope="col">Descripcion</th>
                            <th className="text-center" scope="col">Fecha de creacion</th>
                            <th className="text-center" scope="col">Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        { encuestasUser.map( ( item, index ) => {
                            return (
                                <tr key={ index } className="table-light">
                                    <th className="text-center"  scope="row">{ index }</th>
                                    <td className="text-center" > { item.titulo } </td>
                                    <td className="text-center" > { item.descripcion } </td>
                                    <td className="text-center" > {  moment( item.created_at ).format( 'D/M/YYYY' ) } </td>
                                    <td className="text-center" onClick={ (e) => handleActiveSurvey( item.id ) } >
                                        <i className={ `fs-3 bi bi-toggle-${  item.activo ? "on link-success": "off link-danger "  }` }></i>
                                    </td>
                                </tr>
                            )
                        } ) }
                    </tbody>
                </table>
                }
            </div>
        </div>
    )
}
