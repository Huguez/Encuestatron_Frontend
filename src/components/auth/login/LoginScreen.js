import React, { useState } from "react"
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { setMsgError } from '../../../actions/ui'

import { useForm } from '../../../hooks/useForm'
import { validateEmail } from "../../../helpers/validateEmail"

import './LoginScreen.css'
import { startLogin } from "../../../actions/auth"


export const LoginScreen = () => {

    const dispatch = useDispatch()
    const { msgError } = useSelector( state => state.ui )
    
    const [ formValues, handleFormValues ] = useForm( {
        loginEmail: 'carlos.huguez@gmail.com',
        loginPassword: '051189'
    } );
    const { loginEmail, loginPassword } = formValues

    const [ validForm, setValidForm ] = useState( { 
        email: 0,
        password: 0,
    } );
    const { email, password } = validForm;

    const handleValid = ( { code, target } ) => {
        if ( code === 'Tab' ) {
            console.log( code )
            return
        }

        let aux;
        switch ( target.id ) {
            case 'email':
                aux = loginEmail !== '' && validateEmail( loginEmail ) ? 1 : 2
                break;
                
            case 'password':
                aux = loginPassword !== '' ? 1 : 2
                break;
                
            default:
                console.log("default")
                break;
        }

        setValidForm( {
            ...validForm,
            [target.id]: aux
        } )
    }

    const getClass = ( num ) => {
        switch ( num ) {
            case 1:
                return 'is-valid'
            case 2:
                return 'is-invalid'
            default:
                return ''
        }
    }
    
    const handleLoginSubmit = ( e ) => {
        e.preventDefault();
        if( loginEmail === '' || loginPassword === '' ) {
            dispatch( setMsgError( "Asegurese de llenar todos los campos" ) )
            return;
        }
        
        dispatch( startLogin( loginEmail, loginPassword ) )
    }

    return (
        <div className="loginFace">

            <div className="wrap shadow-lg p-3 mb-5 bg-body rounded">
                
                <div className="container border border-1" >

                    <div className="imgcontainer">
                        <img className="avatar" src="https://upload.wikimedia.org/wikipedia/commons/7/73/Ruby_logo.svg" alt="Avatar"  />
                        <img className="avatar" src="https://upload.wikimedia.org/wikipedia/commons/4/47/React.svg" alt="Avatar"  />
                    </div>

                    { !!msgError && 
                        <div className="form-control m-2 mb-4 alert alert-warning alert-dismissible fade show" role="alert">
                            <i className="bi bi-exclamation-octagon-fill"></i>
                            <strong className="mx-2"> { msgError } </strong>
                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div> 
                    }

                    <div className="m-3">
                        <form onSubmit={ handleLoginSubmit } >
                            <input 
                                id="email" 
                                onKeyUp={ handleValid }  
                                className={ `form-control mb-3 ${ getClass( email ) }` }  
                                onChange={ handleFormValues } 
                                name="loginEmail"  
                                value={ loginEmail } 
                                type="email"  
                                placeholder="e-mail" 
                                autoComplete="off" 
                                autoCorrect="off" />

                            <input 
                                id="password" 
                                onKeyUp={ handleValid } 
                                className={ `form-control mb-3 ${ getClass( password ) }` } 
                                value={ loginPassword } 
                                onChange={ handleFormValues }  
                                name="loginPassword"  
                                type="password"  
                                placeholder="password" 
                                autoComplete="off" 
                                autoCorrect="off" />
                  
                            <div>
                                <Link className="btn btn-link" to="/auth/register"> without Account? Register </Link>
                            </div>

                            <br/>

                            <div className="d-grid gap-2">
                                <button type="submit"  className="btn btn-primary" > Log In </button>
                            </div>

                        </form>
                    </div>
                </div>                
            </div>
        </div>
    )
}
