import React from "react"; //dependencia de react que se necesita para hacer el renderizado
import ReactDOM from "react-dom"; //dependencia de react que se necesita para hacer el renderizado
import { Aplicacion } from './Componentes_generales'; //traigo funcion Aplicacion

//pido que renderice la aplicacion
ReactDOM.render(
    <React.StrictMode>
        <Aplicacion/>
    </React.StrictMode>,
    document.getElementById('root')
);

