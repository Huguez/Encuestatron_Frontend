import React from 'react'
import { useHistory } from "react-router-dom";


import PropTypes from 'prop-types';


export const ItemEncuesta = ( { encuesta:{ id, titulo, descripcion, activo, segunda_ronda } } ) => {
    
    const history = useHistory()

    const handleClick = () => {
        if( activo ){
            history.push( `/show/${ id }/encuesta/` )
        }else{
            history.push( `/encuesta/${ id }/grafica/` )
        }
    }

    return (
        <div className="m-auto " style={ { maxWidth: "100%" } }>
            <div className="card">
                <div className="card-body">
                    
                    <div className="d-flex justify-content-between">
                        <div className="col-7">
                            <h5 className="card-title text-truncate" style={ { maxWidth: "380px"} } >
                                { titulo }
                                
                            </h5>
                        </div>
                        <div className="col text-end ">
                            { segunda_ronda && <p className=" badge rounded-pill bg-secondary">
                                    Segunda Ronda
                            </p> } 

                            <p className={`badge rounded-pill ${ activo ? "bg-success" : "bg-danger" }`}>
                                { activo ? "En Proceso" : "Concluida" }  
                            </p>
                        </div>
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