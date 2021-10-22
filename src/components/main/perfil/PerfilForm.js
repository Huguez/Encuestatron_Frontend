import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startUpdateUsuario } from '../../../actions/usuario';


import { useForm } from '../../../hooks/useForm'

export const PerfilForm = () => {

    const dispatch = useDispatch()
    const { user } = useSelector( state => state.auth )
    
    const [ formValues, hanldeChange ] = useForm( {
        nombre: user.name,
        email: user.email,
        password: '',
        password2: '',
    } );
    const { nombre, email, password, password2 }  = formValues


    const handleSubmit = ( e ) => {
        e.preventDefault();
        if ( password !== password2 ) {
            alert("aqui va una alerta chila, la contrasena es diferente")
            return
        }
        dispatch( startUpdateUsuario( { name: nombre, email, password } ) )
    }

    return (
        <div className=" p-5 ">
            <form onSubmit={ handleSubmit } className=" m-auto ">
                
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

                <div class="d-grid gap-2 col-6 mx-auto">
                    <button  className="btn btn-primary" type="submit" >Editar</button>
                </div>
            </form>
        </div>
    )
}
