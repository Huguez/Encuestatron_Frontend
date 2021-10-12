import React from 'react'
import { Link } from 'react-router-dom'

export const Alerta = () => {
    return (
        <div className="alert alert-primary" role="alert">
            <h4 className="alert-heading"> 
                <i className="bi bi-check-circle-fill mx-2"></i>
                ¡Buen trabajo!
            </h4>
            <hr />
            <p className="mb-0">
                Ya haz votado en esta encuesta, puedes votar en otras 
                <Link className="alert-link mx-1" to='/'> 
                    encuestas. 
                </Link>
            </p>
        </div>
    )
}
