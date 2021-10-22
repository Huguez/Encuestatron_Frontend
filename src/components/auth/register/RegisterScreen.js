import React,{ useState } from "react";
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";

import { startRegister } from "../../../actions/auth"

import { useForm } from "../../../hooks/useForm";
import { validateEmail } from '../../../helpers/validateEmail';

import '../login/LoginScreen.css'

export const RegisterScreen = () => {

    const dispatch = useDispatch()

    const [ formValues, handleFormValues ] = useForm( {
        registerName: 'wawa',
        registerEmail: 'wawa@wawa.com',
        registerPassword: '123456',
        registerConfirmPassword: '123456',
        
    } );
    const { registerName, registerEmail, registerPassword, registerConfirmPassword } = formValues


    const [ validForm, setValidForm ] = useState( { 
        name: 0,
        email: 0,
        password: 0,
        password2: 0
    } );
    const { name, email, password, password2 } = validForm;

    const handleValid = ( { code, target } ) => {
        if ( code === 'Tab' ) {
            return
        }

        let aux;
        switch ( target.id ) {
            case 'name':
                aux = registerName !== ''  ? 1 : 2
                break;

            case 'email':
                aux = registerEmail !== '' && validateEmail( registerEmail ) ? 1 : 2
                break;
                
            case 'password':
                aux = registerPassword !== '' ? 1 : 2
                break;
                
            case 'password2':
                aux = registerConfirmPassword !== '' || registerPassword !== registerConfirmPassword ? 1 : 2
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

    const handleRegisterSubmit = ( e ) => {
        e.preventDefault();
        if( registerName === '' || 
            registerEmail  === '' || 
            registerPassword  === ''|| 
            registerConfirmPassword === '' ||
            registerPassword !== registerConfirmPassword ) {
            return;
        }

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
                            
                            <input 
                                id="name" 
                                onKeyUp={ handleValid } 
                                onChange={ handleFormValues } 
                                value={ registerName } 
                                className={ `form-control m-2 ${ getClass( name ) }`} 
                                type="text"  
                                placeholder="name" 
                                name="registerName" 
                                autoComplete="off" 
                                autoCorrect="off" />
                            
                            <input 
                                id="email" 
                                onKeyUp={ handleValid } 
                                onChange={ handleFormValues } 
                                value={ registerEmail } 
                                className={ `form-control m-2 ${ getClass( email ) }`} 
                                type="email"  
                                placeholder="e-mail" 
                                name="registerEmail" 
                                autoComplete="off" 
                                autoCorrect="off" />

                            <input 
                                id="password" 
                                onKeyUp={ handleValid } 
                                onChange={ handleFormValues } 
                                value={ registerPassword } 
                                className={ `form-control m-2 ${ getClass( password ) }`} 
                                type="password"  
                                placeholder="password" 
                                name="registerPassword" 
                                autoComplete="off" 
                                autoCorrect="off" />
                       
                            <input 
                                id="password2" 
                                onKeyUp={ handleValid } 
                                onChange={ handleFormValues } 
                                value={ registerConfirmPassword } 
                                className={ `form-control m-2 mb-3 ${ getClass( password2 ) }`} 
                                type="password"  
                                placeholder="confirm password" 
                                name="registerConfirmPassword" 
                                autoComplete="off" 
                                autoCorrect="off"  />
                       
                            <Link to="/auth/login" className="btn btn-link" > You Have Account? Log in </Link>
                            
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
