import React from 'react'
import { useHistory } from "react-router-dom";

export const AddNewEncuesta = ( ) => {
    const history = useHistory();

    
    const handleClick = (e) => {
        history.replace('/create/encuesta/');
        localStorage.setItem( 'lastRuta', '/create/encuesta/' )
    }

    return (
        <button type="button" className="btn btn-success fab" onClick={ handleClick }  >
            <i className="bi bi-plus-circle"></i>
        </button>
    )
}
