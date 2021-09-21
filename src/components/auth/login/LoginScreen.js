import React from "react"
import { Link } from 'react-router-dom'
import './LoginScreen.css'


export const LoginScreen = () => {
    
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
                            <input className="form-control mb-3" type="email"  placeholder="e-mail" name="email"  />

                            <input className="form-control mb-3" type="password"  placeholder="password" name="password"  />
                            
                            <input onChange={ () =>{} } className="form-check-input mx-2" type="checkbox" checked="checked" name="remember" /> Remember me
                            
                            <br/>
                            
                            <div>
                                <Link className="btn btn-link" to="/">Forgot password?</Link>
                                <Link className="btn btn-link" to="/auth/register"> without Account? Register </Link>
                            </div>

                            <br/>

                            <div className="d-grid gap-2">
                                <button type="button"  className="btn btn-primary" > Log In </button>
                            </div>

                        </form>
                    </div>
                </div>                
            </div>
        </div>
    )
}
