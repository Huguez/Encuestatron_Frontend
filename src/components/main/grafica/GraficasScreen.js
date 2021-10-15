import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Redirect } from 'react-router-dom';

import { startShowEncuesta } from '../../../actions/encuesta';
import { clearShowEncuesta } from '../../../actions/encuesta';

import { Loading } from '../../ui/Loading';

import { Grafica } from './Grafica';


export const GraficaScreen = () => {

    const { id } = useParams();

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch( startShowEncuesta( id ) )
        return () => {
            dispatch( clearShowEncuesta() )
        }
    }, [ dispatch, id ])

    const { show, loadingGraph } = useSelector( state => state.survey )

    if ( loadingGraph ) {
        return <Loading />
    }

    if ( !show ) {
        return <Redirect to="/404" />
    }

    return (
        <div className="m-auto" style={{ width: '73%' }}>
            <h2 className="display-5 text-capitalize"> { show.titulo } </h2>
           <br />
           <Grafica />
        </div>
    )
}
