import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { startLoadVotes } from '../../../actions/voto'

import { Loading } from '../../ui/Loading'

import { Bar } from 'react-chartjs-2';
import { prepareVotes } from '../../../helpers/prepareVotes';



export const Grafica = () => {

    const { show:{ id:id_encuesta } } = useSelector( state => state.survey )
    
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch( startLoadVotes( id_encuesta ) )
        // return () => { 
        // }
    }, [ dispatch, id_encuesta ])

    const { votos:v } = useSelector( state => state.vote )

    const { etiquetas, dato, colores } = prepareVotes( v )
    const { loadingGraph } = useSelector( state => state.survey )

    if ( loadingGraph ) {
        return <Loading />
    }

    const data = {
        labels: [ ...etiquetas ],
        datasets: [
            {
                label: '# of Votes',
                data: [ ...dato ],
                backgroundColor: [ ...colores ],
                borderColor: [ ...colores ],
                borderWidth: 2,
            },
        ],
    };

    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    };

    return (
        <div>
            <Bar data={ data } options={ options }  />
        </div>
    )
}
