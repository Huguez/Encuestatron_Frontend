import React, { useState } from "react"
import { Link } from 'react-router-dom'
import '../login/LoginScreen.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import es from 'date-fns/locale/es';

registerLocale('es', es )
setDefaultLocale( 'es' )

export const RegisterScreen = () => {

    const [ startDate, setStartDate ] = useState( '' );
    
    console.log( startDate )

    return (
        <div className="loginFace">

            <div className="wrap shadow-lg p-3 mb-5 bg-body rounded">
                
                <div className="container border border-1" >

                    <div className="imgcontainer">
                        <img className="avatar" src="https://upload.wikimedia.org/wikipedia/commons/7/73/Ruby_logo.svg" alt="Avatar"  />
                        <img className="avatar" src="https://upload.wikimedia.org/wikipedia/commons/4/47/React.svg" alt="Avatar"  />
                    </div>

                    <div className="m-3">
                        <form>
                            <input className="form-control m-2" type="text"  placeholder="name" name="name"  />
                            
                            <input className="form-control m-2" type="text"  placeholder="last name" name="lastname"  />
                            
                            <input className="form-control m-2" type="email"  placeholder="e-mail" name="email"  />

                            <DatePicker className="form-control m-2" selected={startDate} onChange={ ( date ) => setStartDate( date ) } placeholderText={ 'birthday' } />

                            <input className="form-control m-2" type="password"  placeholder="password" name="password"  />
                       
                            <input className="form-control m-2 mb-3" type="password"  placeholder="confirm password" name="password"  />
                       
                            <Link to="/auth/login" className="btn btn-link" > You Have Account? Log in </Link>
                            
                            <br/>

                            <div className="d-grid gap-2 mt-5">
                                
                                <button type="button"  className="btn btn-success" > Register </button>
                            </div>

                        </form>
                    </div>
                </div>                
            </div>
        </div>
    )
}
