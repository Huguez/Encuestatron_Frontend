import React from "react"
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useForm } from '../../../hooks/useForm'

import './LoginScreen.css'
import { startLogin } from "../../../actions/auth"


export const LoginScreen = () => {

    const dispatch = useDispatch()

    const [ formValues, handleFormValues ] = useForm( {
        loginEmail: 'carlos.huguez@gmail.com',
        loginPassword: '051189'
    } );
    const { loginEmail, loginPassword } = formValues

    
    const handleLoginSubmit = ( e ) => {
        e.preventDefault();
        
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

                    <div className="m-3">
                        <form onSubmit={ handleLoginSubmit } >
                            <input value={ loginEmail } onChange={ handleFormValues } autoComplete="off" className="form-control mb-3" type="email"  placeholder="e-mail" name="loginEmail"  />

                            <input value={ loginPassword } onChange={ handleFormValues }  autoComplete="off" className="form-control mb-3" type="password"  placeholder="password" name="loginPassword"  />
                  
                            <div>
                                <Link className="btn btn-link" to="/">Forgot password?</Link>
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
