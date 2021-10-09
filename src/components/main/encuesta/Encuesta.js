import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Loading } from '../../ui/Loading'

import { startShowEncuesta, ClearShowEncuesta } from '../../../actions/encuesta'

export const Encuesta = (  ) => {
    const { id } = useParams()
    const dispatch = useDispatch()

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

    return (
        <div>
            { show.titulo }
        </div>
    )
}

