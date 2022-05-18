import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Encabezado } from './Encabezado';
import { Tabla } from './Tabla';
import { Boton } from './Boton_evento';

export function Aplicacion(){
    return(
        <React.Fragment>
            <Encabezado/>
            <Tabla/>

            <Tabla/>
            <Boton/>
        </React.Fragment>

    ) 
}