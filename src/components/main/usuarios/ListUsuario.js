import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import { startChangeRoleUsuario, startDeleteUsuario } from '../../../actions/usuario'

export const ListUsuario = () => {
    
    const dispatch = useDispatch()
    const { listaUsuarios:list } =  useSelector( state => state.usuarios )
    const { user:{ id } } =  useSelector( state => state.auth )
    
    let listaUsuarios = [ ...list.filter( item =>  item.id !== id )  ]

    const handleDelete = ( id ) => {
        dispatch( startDeleteUsuario( id ) )
    }

    const handleRole = ( item ) => {
        dispatch( startChangeRoleUsuario ( item ) )
    }

    return (
        <div>
            <table className="table table-bordered m-auto text-center"  style={{ width: '75%' }} >
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Correo</th>
                        <th scope="col">Rol</th>
                        <th scope="col">Accion</th>
                    </tr>
                </thead>
                <tbody>
                    { 
                        listaUsuarios.map( ( item, index ) => (
                            <tr key={ index }>
                                <th scope="row">{ index +1 }</th>
                                <td>{ item.name }</td>
                                <td>{ item.email }</td>
                                <td>{ item.role }</td>
                                <td>
                                    <button onClick={ (e) => handleRole( item ) } className={`btn btn-${ item.role === 'usuario' ? "warning" : "secondary" } mx-1`}>
                                        <i className="bi bi-person-fill mx-1"></i>
                                        { `Cambiar a ${  item.role === 'usuario' ? "ADMIN" : "Usuario" }` }
                                    </button>

                                    <button onClick={ (e) => handleDelete( item.id ) } className="btn btn-danger mx-1">
                                    <i className="bi bi-trash-fill mx-1"></i>
                                        ELiminar
                                    </button>

                                </td>
                            </tr>
                        ) )
                    }
                </tbody>
            </table>
        </div>
    )
}
