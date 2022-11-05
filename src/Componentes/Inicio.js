import React,{Component} from "react";
import './../App.css';
import voto1 from './../img/voto1.png';
import voto2 from './../img/voto2.png';
import voto3 from './../img/voto3.png';

class Inicio extends Component{
    render(){
        return(
            <div className=" ">
                <div className="row">
                    <div className="col-12">
                        <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active" data-bs-interval="10000">
                                <img src={voto1} className="d-block w-100" alt="" height="400px"/>
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5>First slide label</h5>
                                        <p>Some representative placeholder content for the first slide.</p>
                                    </div>
                                </div>
                                <div class="carousel-item" data-bs-interval="2000">
                                <img src={voto2} className="d-block w-100" alt="" height="400px"/>
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5>Second slide label</h5>
                                        <p>Some representative placeholder content for the second slide.</p>
                                    </div>
                                </div>
                                <div class="carousel-item img-carrusel">
                                <img src={voto3} className="d-block w-100" alt="" height="400px"/>
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5>Third slide label</h5>
                                        <p>Some representative placeholder content for the third slide.</p>
                                    </div>
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>

                    <div className="col-12">
                        <div className="row">
                        <div className=" col-1">
                    </div>
                    <div className=" col-10">
                        <div className="row inf">
                            <div className="col-4 p-3">
                                <div className="card">
                                    <div class="card-body">
                                        <div className="card-text text-inf">
                                            <p>El término e-voting se refiere a la "votación electrónica" y hace alusión a la opción de utilizar medios electrónicos para votar en los referendos y las elecciones. </p>
                                            <p>Hay sistemas como las máquinas de registro electrónico directo de la votación, en que la información no es transmitida a través de Internet u otra red. </p>
                                            <p>La interfaz de una máquina  de ese tipo puede ser mediante una pantalla táctil, o un escáner que explora la  papeleta de votación donde el elector marcó su voto.</p>
                                            <br></br> 
                                            <p className="cita">(Voto electrónico (E-voting) —, s. f.) </p>                                      
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 p-3">
                                <div className="card">
                                    <div class="card-body">
                                        <div className="card-text text-inf">
                                            <p>La información es entonces registrada y almacenada en la máquina. También está la votación a través del Internet, que utiliza una computadora personal con una conexión a Internet para emitir el voto y enviarlo para ser almacenado en otra computadora remota.</p> 
                                            <p>Las agendas electrónicas y los teléfonos fijos o móviles también pueden ser utilizados para emitir un voto electrónicamente.</p>
                                            <p>El voto electrónico  tiene que ser tan libre, secreto, fiable y seguro como los sistemas de votación que no implican el uso de medios electrónicos.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 p-3">
                                <div className="card">
                                    <div class="card-body">
                                        <p className="card-text text-inf">Un sistema de voto electrónico, por lo tanto, debe considerar los siguientes requisitos mínimos:

                                            <li>Asegurar que sólo las personas con derecho a voto están en condiciones de votar.</li>
                                            <li>Garantizar que cada voto sea contado y que sea contado sólo una vez.</li>
                                            <li>Mantener el derecho del elector a formar y expresar su opinión de una manera libre, sin ningún tipo de coacción o influencia indebida.</li>
                                            <li>Proteger la secrecía del voto en todas las fases del proceso de votación.</li>
                                            <li>Garantizar la accesibilidad al mayor número posible de votantes, especialmente a las personas con discapacidad.</li>
                                            <li>Aumentar la confianza de los electores al maximizar la transparencia de la información sobre el funcionamiento de cada sistema.</li>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" col-1">
                    </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default Inicio;