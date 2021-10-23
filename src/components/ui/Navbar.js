import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Link, NavLink } from 'react-router-dom'
import { startLogout } from '../../actions/auth'


export const Navbar = ( props ) => {

    const [ dropMenu,  setDropMenu ] = useState( false )


    const dispatch = useDispatch();
    const { user:{ role } } = useSelector( state => state.auth )
    
    const handleLogout = (e) => {
        dispatch( startLogout() )
    }

    const handleClick = ( e ) => {
        setDropMenu( !dropMenu )
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light shadow p-3 mb-5 bg-body rounded" >
            <div className="container-fluid">
    
                <button onClick={ handleClick } className="btn navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <i className=" h1 bi bi-caret-down-square"></i>
                </button>

                <NavLink activeClassName="active" className="navbar-brand " to="/"> 
                    <i className="bi bi-bar-chart-line h2 mx-2"></i>
                    Encuestatron
                </NavLink>
                
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav">
                        
                        <li className="nav-item mt-2">
                            <NavLink activeClassName="active" className="nav-link" to="/misEncuestas"> 
                                Mis Encuestas
                            </NavLink>        
                        </li>

                        { role === "ADMIN" && <li className="nav-item mt-2">
                            <NavLink activeClassName="active" className="nav-link" to="/usuarios"> 
                                Usuarios
                            </NavLink>
                        </li> }
                        
                    </ul>
                    
                </div>

                <div className="d-flex">    
                    <div className="btn-group">
                        <button type="button" className="btn " data-bs-toggle="dropdown" aria-expanded="false">
                            <span className="m-2">
                                <i className="bi bi-person-circle h2 "></i>
                            </span>
                        </button>
                        <ul className={`dropdown-menu dropdown-menu-${ dropMenu ? 'start' : 'end' }`}>
                            <li>
                                <Link className="dropdown-item" to="/perfil"> Editar Perfil </Link>
                            </li>
                            {/* <li><a className="dropdown-item" href="#">Something else here</a></li> */}
                            
                            <li><hr className="dropdown-divider" /></li>
                            <li><span className="dropdown-item" onClick={ handleLogout } >Logout</span></li>
                        </ul>
                    </div>
                </div>
                
                {/* <div className="navbar-brand">
                    <form class="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>                 
                */}

            </div>
        </nav>
    )
}