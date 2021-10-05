import React from "react";
import { useSelector } from "react-redux";
import { Encuesta } from "./Encuesta";
// import PropTypes from 'prop-types';
import { startLoadEncuestas } from '../../../actions/encuesta'


export const ListEncuesta = () => {

    const { encuestas } = useSelector( state => state.survey );
    let lista = [...Object.values( encuestas ) ]

    return (
        <div className="container">
            <div className="row" >
                <div className="col" >
                    {
                       lista.map( ( value ) => ( <Encuesta key={ value.id }  encuesta={ { ...value } } /> ) )
                    }
                </div>
            </div>
        </div>
    )
}
