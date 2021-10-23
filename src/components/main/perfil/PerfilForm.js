import React, { useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startUpdateUsuario } from '../../../actions/usuario';
import Swal from 'sweetalert2'

import { useForm } from '../../../hooks/useForm'
import { cleanMsgError, setMsgError } from '../../../actions/ui';

export const PerfilForm = () => {

    const dispatch = useDispatch()
    const { user } = useSelector( state => state.auth )
    const { msgError } = useSelector( state => state.ui )
    
    const [ formValues, hanldeChange ] = useForm( {
        nombre: user.name,
        email: user.email,
        password: '',
        password2: '',
    } );
    const { nombre, email, password, password2 }  = formValues

    const handleclose = useCallback( () => {
        dispatch( cleanMsgError() )
    }, [ dispatch ] )
    

    useEffect( ()=>{
        return () => {
            handleclose()
        }
    }, [ handleclose ] )


    const handleSubmit = ( e ) => {
        e.preventDefault();
        if ( password !== password2 ) {
            dispatch( setMsgError( 'Las contraseñas no coinciden' ) )
            return;
        }
        
        if ( nombre === '' || email === '' || password === '' ) {
            dispatch( setMsgError( 'Faltan campos por llenar' ) )
            return;
        }
        
        Swal.fire( { 
            icon: 'warning',
            text: `¿Seguro que deseas Actualizar su Perfil?`,
            showCancelButton: true,
            confirmButtonText: `Aceptar`,
        } ).then( ( result ) => {
            if ( result.isConfirmed ) {
                dispatch( startUpdateUsuario( { name: nombre, email, password } ) )
            }
        } )
    }

    return (
        <div className=" p-5 ">
            <form onSubmit={ handleSubmit } className=" m-auto ">
                
                { !!msgError &&
                    <div className="form-control m-2 mb-4 alert alert-warning alert-dismissible fade show" role="alert">
                        <i className="bi bi-exclamation-octagon-fill"></i>
                        <strong className="mx-2"> { msgError } </strong>
                        <button onClick={ handleclose } type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div> 
                }

                <div className="mb-3 row">
                    <label htmlFor="staticName" className="col-sm-3 col-form-label">Nombre</label>
                    <div className="col-sm-9">
                        <input onChange={ hanldeChange } name="nombre" value={ nombre } type="text" className="form-control" id="staticName" />
                    </div>
                </div>
                
                <div className="mb-3 row">
                    <label htmlFor="staticEmail" className="col-sm-3 col-form-label">E-mail</label>
                    <div className="col-sm-9">
                        <input onChange={ hanldeChange } name="email" value={ email } type="email" className="form-control" id="staticEmail" />
                    </div>
                </div>
                
                <div className="mb-3 row">
                    <label htmlFor="inputPassword" className="col-sm-3 col-form-label">Nueva Contraseña</label>
                    <div className="col-sm-9">
                        <input onChange={ hanldeChange } name="password" value={ password } type="password" className="form-control" id="inputPassword" />
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="inputPassword2" className="col-sm-3 col-form-label">Confirmar Contraseña</label>
                    <div className="col-sm-9">
                        <input onChange={ hanldeChange } name="password2" value={ password2 } type="password" className="form-control" id="inputPassword2" />
                    </div>
                </div>

                <div className="d-grid gap-2 col-6 mx-auto">
                    <button  className="btn btn-primary" type="submit" >Editar</button>
                </div>
            </form>
        </div>
    )
}
