import React from "react";

export function Tabla() {
  return (
    <table class="table table-dark">
      <thead>
        <tr>
          <th scope="col">Estudiante</th>
          <th scope="col">Nombres</th>
          <th scope="col">Apellidos</th>
          <th scope="col">Instagram</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Nicolas</td>
          <td>Giraldo Gil</td>
          <td>@ggnicoo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Soffia</td>
          <td>Matinez Palacio</td>
          <td>@diana_soffia</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Daniel</td>
          <td>López López</td>
          <td>@danfer__lopez</td>
        </tr>
      </tbody>
    </table>
  )
}