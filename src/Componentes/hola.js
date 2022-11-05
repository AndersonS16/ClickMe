import React,{Component} from "react";

class Hola extends Component{
    render(){
        return(
            <div> <h1 className="display-1 text-white">Hola a todos! {this.props.nombre}</h1></div>
        );
    }
}

export default Hola;