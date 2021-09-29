import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { Link } from 'react-router-dom'
import { startLogout } from '../../actions/auth'


export const Navbar = ( props ) => {

    const { user } = useSelector( state => state.auth )
    const dispatch = useDispatch();

    const handleLogout = (e) => {
        dispatch( startLogout() )
    }

    return (
        <nav className="navbar navbar-light shadow p-3 mb-5 bg-body rounded" >
            <div className="container-fluid">

                <Link className="navbar-brand" to="/"> 
                    <i className="bi bi-bar-chart-line h2"></i>
                    <span className=" mx-2">
                        Encuestatron
                    </span>
                </Link>
                <ul className="navbar-nav">
                    <li className="nav-item">

                        <span className="m-2">
                            { user ? user.name : '' }
                        </span>
                    </li>
                </ul>
                <div className="d=flex">    
                    <div className="btn-group">
                        <button type="button" className="btn " data-bs-toggle="dropdown" aria-expanded="false">
                            <span className="m-2">
                                <i className="bi bi-person-circle h2 "></i>
                            </span>
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end">
                            <li><a className="dropdown-item" href="">Perfil</a></li>
                            {/* <li><a className="dropdown-item" href="#">Usuarios</a></li> */}
                            {/* <li><a className="dropdown-item" href="#">Something else here</a></li> */}
                            
                            <li><hr className="dropdown-divider" /></li>
                        
                            <li><a className="dropdown-item" href="" onClick={ handleLogout } >Logout</a></li>
                        </ul>
                    </div>
                </div>    
            </div>
        </nav>
    )
}