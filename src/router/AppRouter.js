import React from "react";
import { BrowserRouter as Router, Switch } from 'react-router-dom'

import { LoginScreen } from '../components/auth/login/LoginScreen'
import { RegisterScreen } from '../components/auth/register/RegisterScreen'
// import { NotFoundScreen } from '../components/404/NotFoudScreen'

import { DashboardScreen } from '../components/main/DashboardScreen'

import { PublicRoute } from './PublicRoute'
import { PrivateRoute } from './PrivateRoute'


export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute isAuthenticated={ false } path='/auth/login'  component={ LoginScreen } />
                    <PublicRoute isAuthenticated={ false } path='/auth/register'  component={ RegisterScreen } />
                    
                    <PrivateRoute isAuthenticated={ true } path='/' component={ DashboardScreen } />

                </Switch>
            </div>
        </Router>
    )
}