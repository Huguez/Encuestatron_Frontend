import React from "react";
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { LoginScreen } from '../components/auth/login/LoginScreen'
import { RegisterScreen } from '../components/auth/register/RegisterScreen'

import { DashboardScreen } from '../components/main/DashboardScreen'

import { PublicRoute } from './PublicRoute'
import { PrivateRoute } from './PrivateRoute'


export const AppRouter = () => {
    const { user, logged } = useSelector(state => state.auth )
    
    console.log( user, logged )

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute isAuthenticated={ logged } path='/auth/login'  component={ LoginScreen } />
                    <PublicRoute isAuthenticated={ logged } path='/auth/register'  component={ RegisterScreen } />
                    
                    <PrivateRoute isAuthenticated={ true } path='/' component={ DashboardScreen } user={ user } />

                </Switch>
            </div>
        </Router>
    )
}