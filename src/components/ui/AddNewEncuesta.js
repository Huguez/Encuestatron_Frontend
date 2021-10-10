import React from 'react'
import { useDispatch } from 'react-redux'
import { openModal } from '../../actions/ui'

export const AddNewEncuesta = ( ) => {
    const dispatch = useDispatch()
    
    const handleClick = (e) => {
        dispatch( openModal() )
    }

    return (
        <button type="button" className="btn btn-success fab" onClick={ handleClick }  >
            <i className="bi bi-plus-circle"></i>
        </button>
    )
}
