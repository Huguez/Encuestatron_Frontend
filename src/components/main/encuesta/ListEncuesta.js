import React from "react";
import { Encuesta } from "./Encuesta";
// import PropTypes from 'prop-types';

export const ListEncuesta = ( props ) => {

    const listAux = [ 1,2,3,4,5 ];

    return (
        <div className="container">
            <div className="row" >
                <div className="col" >
                    {
                        listAux.map( value => ( <Encuesta  key={value} /> ) )
                    }
                </div>
            </div>
        </div>
    )
}
