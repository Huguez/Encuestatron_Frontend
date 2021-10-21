import React, { useState } from "react";
import { useSelector } from "react-redux";

import { ItemEncuesta } from "./ItemEncuesta";
import { FilterForm } from "../../ui/FilterForm";

import { transformToMatrix } from '../../../helpers/transformToMatrix'


export const ListEncuesta = () => {

    const { encuestas } = useSelector( state => state.survey );
    let lista = [ ...Object.values( encuestas ) ]

    const [ columnas, setColumnas ] = useState( '2' )
    const [ ordenar, setOrdenar ] = useState( '2' )
    const [ search, setSearch ] = useState( '' )

    let matriz = transformToMatrix( lista, columnas )

    const body = matriz.map( ( auxRow, i ) => {
        const row = auxRow.map( ( col, j ) => ( <div className="col m-0 p-2"  key={ j }> <ItemEncuesta encuesta={ { ...col} } /> </div> ) )

        return ( <div className={`row  row-cols-${ columnas }`} key={ i }> { row } </div>  )
    } );

    return (
        <div>
            <FilterForm 
                lista={ lista }

                ordenar={ ordenar }
                setOrdenar={ setOrdenar }

                search={ search }
                setSearch={ setSearch }

                columnas={ columnas }
                setColumnas={ setColumnas } />
            
            <div className="row" >
                <div className="col" >
                    <div className="m-auto p-0">   
                        { body }
                    </div>
                </div>
            </div>
        </div>
    )
}
