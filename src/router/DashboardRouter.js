import React from 'react'
import { useSelector } from 'react-redux';

import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'

import { ListEncuesta } from '../components/main/encuesta/ListEncuesta'
import { Encuesta } from "../components/main/encuesta/Encuesta";
import { GraficaScreen } from '../components/main/grafica/GraficasScreen'

import { PrivateRoute } from './PrivateRoute';
import { MisEncuestas } from '../components/main/encuesta/MisEncuestas';
import { NotFoundScreen } from '../components/404/NotFoudScreen';

import { UsuariosScreen } from '../components/main/usuarios/UsuariosScreen'

export const DashboardRouter = () => {
    
    const { logged, user:{ role } } = useSelector( state => state.auth )    

    return (
        <Router>
            <div>
                <Switch>

                    <PrivateRoute isAuthenticated={ logged } path='/show/:id/encuesta' component={ Encuesta } />

                    <PrivateRoute isAuthenticated={ logged } path='/misEncuestas' component={ MisEncuestas } />

                    <PrivateRoute isAuthenticated={ logged } path='/encuesta/:id/grafica/'  component={ GraficaScreen }  />
                    
                    <PrivateRoute isAuthenticated={ logged } path='/404'  component={ NotFoundScreen }  />
                    
                    <PrivateRoute isAuthenticated={ logged && role === "ADMIN" } path='/usuarios'  component={ UsuariosScreen }  />

                    <PrivateRoute isAuthenticated={ logged } path='/'  component={ ListEncuesta }  />

                    <Redirect to='404' />
                </Switch>
            </div>
        </Router>
    )
}