import React from "react"
import { Link } from "react-router-dom"

export const NotFoundScreen = () => {
    return (
        <div className="text-center m-auto">
            <h1 style={{ fontSize: '160px' }} >404</h1>
            <p className="fs-3"> Página No Encontrada </p>
            <Link to="/"> Ir al Inicio </Link>
        </div>
    )
}