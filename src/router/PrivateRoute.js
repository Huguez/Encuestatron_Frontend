import React from "react";
import { Redirect, Route } from 'react-router-dom'
import PropTypes from 'prop-types';

export const PrivateRoute =({ isAuthenticated, component: Component, ...rest }) => {
    return (
        <Route exact {...rest} 
            component={ 
                ( props ) => ( isAuthenticated ) ? // si esto
                ( <Component {...props} /> ) : // entonces esto
                ( <Redirect to='/auth/login' /> ) // si no, esto
            }
        />
    );
}

PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired,
}