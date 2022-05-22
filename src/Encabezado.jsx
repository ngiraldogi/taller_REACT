import React from 'react';

export function Encabezado() {
    return (
        <div class="container p-0 pb-4 mt-1">
            <nav class="navbar navbar-dark bg-dark">
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
                    <li class="nav-item">
                        <div>
                            <form class="d-flex input-group w-auto">
                                <input
                                    type="search"
                                    class="form-control rounded"
                                    placeholder="Buscar"
                                    aria-label="Search"
                                    aria-describedby="search-addon"
                                />
                            </form>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    )
}