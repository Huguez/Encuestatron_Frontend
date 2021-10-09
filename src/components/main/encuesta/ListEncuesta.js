import React from "react";
import { useSelector } from "react-redux";
import { ItemEncuesta } from "./ItemEncuesta";


export const ListEncuesta = () => {

    const { encuestas } = useSelector( state => state.survey );
    let lista = [...Object.values( encuestas ) ]

    return (
        <div className="container">
            <div className="row" >
                <div className="col" >
                    {
                       lista.map( ( value, index ) => ( <ItemEncuesta key={ index } encuesta={ { ...value} } /> ) )
                    }
                </div>
            </div>
        </div>
    )
}
