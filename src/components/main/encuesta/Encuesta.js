import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Loading } from '../../ui/Loading'

import { startShowEncuesta, ClearShowEncuesta } from '../../../actions/encuesta'

export const Encuesta = (  ) => {
    
    const { id } = useParams()
    const dispatch = useDispatch()
    const [ buttonDisabled, setButtonDisabled ] = useState( true )
    const [ opcionElegida, setOpcion ] = useState( '' )

    useEffect(() => {
        dispatch( startShowEncuesta( id ) )
        return () => {
            dispatch( ClearShowEncuesta() )
        }
    }, [dispatch, id])

    const { show } = useSelector( state => state.survey )
    
    if( !show ){
        return <Loading />
    }


    const handleChange = ( e ) => {
        setButtonDisabled( false )
        console.log( "handleChange: ", e.target.id )
        setOpcion( e.target.id )
    }

    const handleSubmit = ( e ) =>{
        e.preventDefault();
        console.log( "handleSubmit: ", opcionElegida )
        // dispatch( *algo para enviar la opcion*( opcionElegida ) )
    }

    return (
        <div className=" m-auto border p-4" style={{ width: "65%" }} >
            <form  onSubmit={ handleSubmit } >            
                <h2>
                    { show.titulo }
                </h2>
                <p> { show.descripcion } </p>
                { show.opciones.map( (op, index) => {
                    return(
                        <div key={ index } className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id={ op } onChange={ handleChange } />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                { op }
                            </label>
                        </div>
                    )
                } ) }

                <div className="d-grid mt-3 gap-2 d-md-flex justify-content-md-end">    
                    <button type="submit" disabled={ buttonDisabled } className="btn btn-primary"> 
                        Votar
                    </button>
                </div>
            </form>
        </div>
    )
}

