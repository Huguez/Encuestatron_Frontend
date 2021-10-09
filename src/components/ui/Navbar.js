import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { NavLink, useHistory } from 'react-router-dom'
import { startLogout } from '../../actions/auth'


export const Navbar = ( props ) => {

    const { user } = useSelector( state => state.auth )
    const dispatch = useDispatch();

    const handleLogout = (e) => {
        dispatch( startLogout() )
    }

    const history = useHistory()

    const handleClick = ( e ) => {
        history.replace( '/' )
        localStorage.setItem( 'lastRuta', '/' )
    }

    return (
        <nav className="navbar navbar-light shadow p-3 mb-5 bg-body rounded" >
            <div className="container-fluid">

                <NavLink activeClassName="active" className="navbar-brand" onClick={ handleClick } to="/"> 
                    <i className="bi bi-bar-chart-line h2"></i>
                    <span className=" mx-2">
                        Encuestatron
                    </span>
                </NavLink>
                <ul className="navbar-nav">
                    <li className="nav-item">

                        <span className="m-2">
                            { user ? user.name : '' }
                        </span>
                    </li>
                </ul>
                <div className="d-flex">    
                    <div className="btn-group">
                        <button type="button" className="btn " data-bs-toggle="dropdown" aria-expanded="false">
                            <span className="m-2">
                                <i className="bi bi-person-circle h2 "></i>
                            </span>
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end">
                            <li><span className="dropdown-item" >Perfil</span></li>
                            {/* <li><a className="dropdown-item" href="#">Usuarios</a></li> */}
                            {/* <li><a className="dropdown-item" href="#">Something else here</a></li> */}
                            
                            <li><hr className="dropdown-divider" /></li>
                        
                            <li><span className="dropdown-item" onClick={ handleLogout } >Logout</span></li>
                        </ul>
                    </div>
                </div>    
            </div>
        </nav>
    )
}