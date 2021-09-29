import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { LoginScreen } from '../components/auth/login/LoginScreen'
import { RegisterScreen } from '../components/auth/register/RegisterScreen'

import { DashboardScreen } from '../components/main/DashboardScreen'
import { startChecking } from "../actions/auth";
import { PublicRoute } from './PublicRoute'
import { PrivateRoute } from './PrivateRoute'


export const AppRouter = () => {

    const dispatch = useDispatch()
    const { user:{ id } } = useSelector( state => state.auth )

    useEffect( () => {
        dispatch( startChecking() )
    }, [ dispatch ] );
 

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute isAuthenticated={ !!id } path='/auth/login'  component={ LoginScreen } />
                    <PublicRoute isAuthenticated={ !!id } path='/auth/register'  component={ RegisterScreen } />
                    
                    <PrivateRoute isAuthenticated={ !!id } path='/' component={ DashboardScreen } />

                </Switch>
            </div>
        </Router>
    )
}