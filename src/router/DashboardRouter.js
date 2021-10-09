import React from 'react'
import { useSelector } from 'react-redux';

import { BrowserRouter as Router, Switch } from 'react-router-dom'

import { ListEncuesta } from '../components/main/encuesta/ListEncuesta'
import { Encuesta } from "../components/main/encuesta/Encuesta";
import { NuevaEncuesta } from '../components/main/encuesta/NuevaEncuesta'
import { PrivateRoute } from './PrivateRoute';

export const DashboardRouter = () => {
    
    const { logged } = useSelector( state => state.auth )    

    return (
        <Router>
            <div>
                <Switch>

                    <PrivateRoute isAuthenticated={ logged } path='/show/:id/encuesta' component={ Encuesta } />

                    <PrivateRoute isAuthenticated={ logged } path='/create/encuesta' component={ NuevaEncuesta } />
                    
                    <PrivateRoute isAuthenticated={ logged } path='/'  component={ ListEncuesta }  />

                    {/* <Redirect to='/create/encuesta' /> */}
                </Switch>
            </div>
        </Router>
    )
}