import React from 'react'
import { useSelector } from "react-redux"
import { Link } from 'react-router-dom'


export const Navbar = ( props ) => {

    const { user } = useSelector( state => state.auth )

    return (
        <nav className="navbar navbar-light shadow p-3 mb-5 bg-body rounded" >
            <div className="container-fluid">

                <Link className="navbar-brand" to="/"> 
                    <i className="bi bi-bar-chart-line h2"></i>
                    <span className=" mx-2">
                        Encuestadors
                    </span>
                </Link>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <span className="m-2">
                            { user ? user.img : 'usuario' }
                        </span>

                        <span className="m-2">
                            <i className="bi bi-person-circle h2 "></i>
                        </span>
                    </li>
                </ul>
            </div>
        </nav>
    )
}