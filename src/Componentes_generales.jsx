import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Encabezado } from './Encabezado';
import { Tabla } from './Tabla';

import { Boton } from './Boton_evento';
import { Footer } from './Footer';

export function Aplicacion(){
    return(
        <React.Fragment>
            <Encabezado/>
            <Tabla/>

            <Tabla/>
            <Boton/>
            <Footer/>
        </React.Fragment>
    ) 
}