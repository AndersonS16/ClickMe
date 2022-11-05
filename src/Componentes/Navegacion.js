/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{Component} from "react";
import './../App.css';

class Navegacion extends Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
                <div className="container-fluid ">
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                            <li className="nav-item">
                                <a href="#" className="nav-link">{this.props.enlace1}</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">{this.props.enlace2}</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">{this.props.enlace3}</a>
                            </li>
                            
                            <li className="nav-item dropdown text-white">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {this.props.enlace3}
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">{this.props.enlace4}</a></li>
                                    <li><a className="dropdown-item" href="#">{this.props.enlace5}</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                
            </nav>
        );
    }
}

export default Navegacion;