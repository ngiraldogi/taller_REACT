import React from 'react';

export function Formulario() {

  function boton(){
    alert("Se ha ingresado ");  
  }
  return (
   <div class= "container mt-5">
     <center>
     <form> 
       <div class="form-group">
            <label for="exampleInputName1" class="form-label">Ingresa tu Nombre</label>
            <input type="text" class="form-control" id="exampleInputName1" placeholder="Nombre"/>
       </div> 
       <div class="form-group">
            <label for="exampleInputLastName1" class="form-label">Ingresa tu Apellidos</label>
            <input type="text" class="form-control" id="exampleInputLastName2" placeholder="Apellidos"/>
          </div>
       <div class="form-group">
          <label for="exampleInputEmail1">Ingresa tu Email</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"/>
       </div>
       <div class="form-group">
           <label for="exampleInputPassword1">Ingresa tu Contraseña</label>
           <input type="password" class="form-control" id="exampleInputPassword1" placeholder="********"/>
       </div> 
       <p class="saltos"></p>
       <button type="submit" class="btn btn-primary" onClick={boton}>Enviar</button>
       <p class="saltos"></p>
      </form>
    </center>
   </div>
   )
 }