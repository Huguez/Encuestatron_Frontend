import React from 'react'
import { 
    // useSelector 
    useDispatch, 
} from 'react-redux'

import { loadEncuetas, startLoadEncuestas, startSearchEncuesta } from '../../actions/encuesta'

import moment from 'moment'
import 'moment/locale/es-mx'

moment.locale('es')

export const FilterForm = ( { columnas, setColumnas, ordenar, setOrdenar, search, setSearch, lista  } ) => {
    
    const dispatch = useDispatch()
    // const { encuestas } = useSelector( state => state.survey );

    const handleOrdenar = ( { target:{ value } } ) => {
        setOrdenar( value )
        
        let ord = ( a, b ) => {
            if( ordenar === '2' ){
                return moment( b.created_at ) - moment( a.created_at )
            } else {
                return moment( a.created_at ) - moment( b.created_at )  
            }
        }
        lista.sort( ord )
        
        dispatch( loadEncuetas( lista ) )
    }

    const handleMostrar = ( {  target:{ value } } ) => setColumnas( value )
    

    const handleSearch = ( e ) => {
        if( e.code === "Enter" && search !== '' ){
            dispatch( startSearchEncuesta( search ) )
        }else{
            if( search === '' ){
                dispatch( startLoadEncuestas() )
            }
        }
    }

    const handleClickButton = ( e ) => {
        if ( search !== '' ) {
            dispatch( startSearchEncuesta( search ) )
        }
    }

    const handleInput = ( { target:{ value } } ) => setSearch( value )

    return (
        <div className="row mx-3 m-auto justify-content-between mb-4" >

            <div className="Mostrar" style={{  maxWidth: '10%' }}>
                <label >Mostrar </label>
                <select  onChange={ handleMostrar } value={ columnas } className="form-select" aria-label="Default select ">
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
            </div>

            <div className="search mt-4" style={{ maxWidth: '70%' }}>
                <div className="input-group">
                    <input onChange={ handleInput } onKeyDown={ () => {} } onKeyUp={ handleSearch } value={ search } name="search" type="text" className="form-control" placeholder="Buscar Encuestas" aria-label="search" aria-describedby="button" autoComplete="off" autoCorrect="off" />
                    <button onClick={ handleClickButton } className="btn btn-outline-success" type="button" id="button">Button</button>
                </div>
            </div>

            <div className="OrdenarPor"  style={{ maxWidth: '16%' }} >
                <label>Ordenar Por</label>
                <select onChange={ handleOrdenar } value={ ordenar } className="form-select" aria-label="Default select ">
                    <option value="1">Más Reciente</option>
                    <option value="2">Más Antiguo</option>
                </select>
            </div>

        </div>
    )
}
