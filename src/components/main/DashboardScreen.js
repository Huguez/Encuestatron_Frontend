import React, { useEffect } from "react"
import { useDispatch } from "react-redux";
import { Navbar } from "../ui/Navbar";
import { AddNewEncuesta } from '../ui/AddNewEncuesta'
import { NuevaEncuesta } from './encuesta/NuevaEncuesta'
import { DashboardRouter } from '../../router/DashboardRouter';
import { startLoadEncuestas } from "../../actions/encuesta";

export const DashboardScreen = ( props ) => {

    const dispatch = useDispatch()

    useEffect( () => {
        dispatch( startLoadEncuestas() )
    }, [dispatch] )
    

    return (
        <div>
            <Navbar /> 
            
            <main className="container">
                
                <DashboardRouter/>
                

                <NuevaEncuesta />
                <AddNewEncuesta />
            </main>
        </div>
    );
}