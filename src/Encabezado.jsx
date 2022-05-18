import React from 'react';

export function Encabezado() {
    return (
        <nav>
            <ul class="nav nav-pills">
                <li class="nav-item">
                    <a class="nav-link" href="#">Inicio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Estudiantes</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Administrativos</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Docentes</a>
                </li>
            </ul>
        </nav>
    )
}