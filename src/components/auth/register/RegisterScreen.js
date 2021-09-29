import React from "react";
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { startRegister } from "../../../actions/auth"
import { useForm } from "../../../hooks/useForm";
import '../login/LoginScreen.css'

export const RegisterScreen = () => {

    const dispatch = useDispatch()

    const [ formValues, handleFormValues ] = useForm( {
        registerName: "wawa",
        registerEmail: '',
        registerPassword: '123456',
        registerConfirmPassword: '123456',
        
    } );

    const { registerName, registerEmail, registerPassword, registerConfirmPassword } = formValues

    const handleRegisterSubmit = ( e ) => {
        e.preventDefault();
        dispatch( startRegister( registerName, registerEmail, registerPassword ) )
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
                        <form onSubmit={ handleRegisterSubmit }>
                            <input onChange={ handleFormValues } value={ registerName } className="form-control m-2" type="text"  placeholder="name" name="registerName"  />
                            
                            <input onChange={ handleFormValues } value={ registerEmail } className="form-control m-2" type="email"  placeholder="e-mail" name="registerEmail"  />

                            <input onChange={ handleFormValues } value={ registerPassword } className="form-control m-2" type="password"  placeholder="password" name="registerPassword"  />
                       
                            <input onChange={ handleFormValues } value={ registerConfirmPassword } className="form-control m-2 mb-3" type="password"  placeholder="confirm password" name="registerConfirmPassword"  />
                       
                            <Link to="/auth/login" className="btn btn-link" > You Have Account? Log in </Link>
                            
                            <br/>

                            <div className="d-grid gap-2 mt-5">
                                
                                <button type="submit"  className="btn btn-success" > Register </button>
                            </div>

                        </form>
                    </div>
                </div>                
            </div>
        </div>
    )
}
