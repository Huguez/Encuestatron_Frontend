import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

// import { startLoadEncuestas } from '../actions/encuesta'
import { startChecking } from "../actions/auth";

import { LoginScreen } from '../components/auth/login/LoginScreen'
import { RegisterScreen } from '../components/auth/register/RegisterScreen'
import { DashboardScreen } from '../components/main/DashboardScreen'


import { PublicRoute } from './PublicRoute'
import { PrivateRoute } from './PrivateRoute'


export const AppRouter = () => {

    const dispatch = useDispatch()
    const { user:{ id } } = useSelector( state => state.auth )
    const { loading } = useSelector( state => state.ui )
    
    useEffect( () => {
        dispatch( startChecking() ) 
    }, [dispatch] )

    // console.log( "AppRouter", !!id )

    if( loading && !id ){
        return ( 
            <div className="container-fluid mt-5">
                <div className="d-flex justify-content-center">
                    <div className="loader"></div>
                </div>
            </div>
        )
    }
    
    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute isAuthenticated={ !!id } path='/auth/register'  component={ RegisterScreen } />
                    <PublicRoute isAuthenticated={ !!id } path='/auth/login'  component={ LoginScreen } />
                    
                    <PrivateRoute isAuthenticated={ !!id } path='/' component={ ()=> <DashboardScreen /> } />

                </Switch>
            </div>
        </Router>
    )

}