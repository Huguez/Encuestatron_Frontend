import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { startLoadUsuarios } from '../../../actions/usuario'
import { ListUsuario } from './ListUsuario'

export const UsuariosScreen = () => {

    const dispatch = useDispatch()

    useEffect( ()=>{
        dispatch( startLoadUsuarios() )
    }, [dispatch] )

    return (
        <div>
             <ListUsuario  />
        </div>
    )
}