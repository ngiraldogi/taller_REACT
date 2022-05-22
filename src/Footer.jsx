import React from "react";

export function Footer() {
    return (
        <footer class="bg-dark text-center text-white">
            <div class="container p-0 pb-4 mt-1">
                <section className="">
                    <div className="container text-center text-md-start mt-5">
                        <div className="row mt-3">
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    <i className="fas fa-gem me-3"></i>Desarrolladores
                                </h6>
                                <p>Nicolás Giraldo Gil </p>                       
                                <p>Daniel Fernando López López</p> 
                                <p>Diana Soffia Martínez Palacio</p> 
                            </div>
                            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 class="text-uppercase fw-bold mb-4">
                                    Tecnologías
                                </h6>
                                <p>
                                    <a href="#!" class="text-reset">Node js</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-reset">React</a>
                                </p>
                            </div>
                            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 class="text-uppercase fw-bold mb-4">
                                    Contacto
                                </h6>
                                <p>Manizales, Caldas, CO</p>
                                <p>une@unal.edu.co</p>
                                <p>+57 312 345 9098</p>
                                <p>834 56 89</p>
                            </div>
                            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-4">
                                <h6 class="text-uppercase fw-bold mb-4">
                                    Acerca de esta página
                                </h6>
                                <p>Política de tratamiento de la información</p>
                                <p>Política de cookies</p>
                                <p>Términos y condiciones</p>
                                <p>Algunos derechos reservados</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div class="bg-primary text-white text-center">
                © 2022 Copyright:
                <p>Universidad Nacional de Colombia Sede Manizales</p>
            </div>
        </footer>
    )
}