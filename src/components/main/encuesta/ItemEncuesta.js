import React from 'react'
import { useHistory } from "react-router-dom";


import PropTypes from 'prop-types';


export const ItemEncuesta = ( { encuesta:{ id, titulo, descripcion, activo } } ) => {
    
    const history = useHistory()

    const handleClick = () => {
        if( activo ){
            history.replace( `/show/${ id }/encuesta/` )
        }else{
            console.log("Grafica")
            // history.replace( `/grafica/${ id }/encuesta/` )
        }
    }
    
    return (
        <div className="m-auto w-50">
            <div className="card  m-3 ">
                <div className="card-body">
                    
                    <div className="d-flex justify-content-between">

                        <h5 className="card-title text-truncate" style={ { maxWidth: "380px"} } >
                            { titulo }
                        </h5>

                        <p className={`badge rounded-pill ${ activo ? "bg-success" : "bg-danger" }`}>
                            { activo ? "Abierta" : "Concluida" }  
                        </p>

                    </div>
                
                    <hr/>
                    <p className="card-text text-truncate"  style={ { maxWidth: "450px"} } >
                        { descripcion }.
                    </p>

                    <button type="button" className="btn btn-primary" onClick={ handleClick } >ir a la Encuesta</button>
                </div>
            </div>
        </div>
    )
}

ItemEncuesta.propTypes = {
    id: PropTypes.number,
    titulo: PropTypes.string,
    descripcion: PropTypes.string,
    activate: PropTypes.bool,
}

ItemEncuesta.defaultProps = {
    id: 1,
    titulo: 'un titulo',
    descripcion: 'una descripcion',
    activate: false,
}