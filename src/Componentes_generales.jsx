import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Encabezado } from './Encabezado';
import { Tabla } from './Tabla';

export function Aplicacion(){
    return(
        <React.Fragment>
            <Tabla/>
        </React.Fragment>

    ) 
}