import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { startChecking } from "../actions/auth";

import { LoginScreen } from '../components/auth/login/LoginScreen'
import { RegisterScreen } from '../components/auth/register/RegisterScreen'
import { DashboardScreen } from '../components/main/DashboardScreen'

import { Loading } from '../components/ui/Loading'

import { PublicRoute } from './PublicRoute'
import { PrivateRoute } from './PrivateRoute'


export const AppRouter = () => {

    const dispatch = useDispatch()
    const { logged,  checking } = useSelector( state => state.auth )
    
    useEffect( () => {
        dispatch( startChecking() )
    }, [dispatch] )
    
    if( checking ){
        return ( 
            <Loading />
        )
    }
    
    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute isAuthenticated={ logged } path='/auth/register'  component={ RegisterScreen } />
                    <PublicRoute isAuthenticated={ logged } path='/auth/login'  component={ LoginScreen } />
                    
                    <PrivateRoute isAuthenticated={ logged } path='/' component={ DashboardScreen } />
                   
                </Switch>
            </div>
        </Router>
    )

}