import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Redirect } from "react-router-dom";

import { Loading } from '../../ui/Loading'
import { Alerta } from '../../ui/Alerta'

import { startShowEncuesta, clearShowEncuesta } from '../../../actions/encuesta'
import { startEnviarVoto, startCheckingVotoAsoc, limpiarStateVote } from "../../../actions/voto";

export const Encuesta = () => {
    
    const { id } = useParams()
    
    const dispatch = useDispatch()

    const [ buttonDisabled, setButtonDisabled ] = useState( true )
    const [ opcionElegida, setOpcion ] = useState( '' )
    
    useEffect(() => {
        dispatch( startShowEncuesta( id ) )
        dispatch( startCheckingVotoAsoc( id ) )
        return () => {
            dispatch( clearShowEncuesta() )
            dispatch( limpiarStateVote() )
        }
    }, [ dispatch, id ])

    const { show } = useSelector( state => state.survey )
    const { checkingVoto, loadingVoto } = useSelector( state => state.vote )
    
    if( loadingVoto ) {
        return <Loading />
    }
    
    if( checkingVoto ) {
        return <Alerta />
    }

    if( !show ){ 
        return <Redirect to="/404" />
    }


    const handleChange = ( e ) => {
        setButtonDisabled( false )
        setOpcion( e.target.id )
    }

    const handleSubmit = ( e ) =>{
        e.preventDefault();
        dispatch(  startEnviarVoto( opcionElegida, id ) )
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