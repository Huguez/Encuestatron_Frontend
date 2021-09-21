import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

export const Encuesta = ( { titulo, descripcion } ) => {

    return (
        <div className="m-auto w-50">
            <div className="card  m-3 "  >
                <div className="card-body">
                    <h5 className="card-title">{ titulo }</h5>
                    <hr/>
                    <p className="card-text">{ descripcion }.</p>
                    <Link className="btn btn-primary" to=''>ir a la Encuesta</Link>
                </div>
            </div>
        </div>
    )
}


Encuesta.propTypes = {
    titulo: PropTypes.string,
    descripcion: PropTypes.string,
}

Encuesta.defaultProps = {
    titulo: 'un titulo',
    descripcion: 'una descripcion',
}