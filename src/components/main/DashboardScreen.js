import React from "react"

import { Navbar } from "../ui/Navbar";
import { ListEncuesta } from "./encuesta/ListEncuesta";
// import { NuevaEncuesta } from "./encuesta/ListEncuesta";
import { AddNewEncuesta } from '../ui/AddNewEncuesta'


export const DashboardScreen = ( props ) => {

    return (
        <div>
            <Navbar /> 
            {/* sidebar */}
            <main>
                
                {/* <DashboardRouter/> */}
                <ListEncuesta />
                
                <AddNewEncuesta />
            </main>
        </div>
    );
}