import React from "react";

export function Boton() {
   
    function alerta_boton(){
        alert("Adivina quien esta abajo de tu cama :)");  
    }
    return (
        <center>
            <button type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off" onClick={alerta_boton}>
                Mensaje que te hará pensar
            </button>    
        </center>
    )
}