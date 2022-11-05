import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
//import Hola from './hola';
import Navegacion from './Componentes/Navegacion';
import Inicio from './Componentes/Inicio';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navegacion enlace1='Inicio'
      enlace2='Elecciones'
      enlace3='Nombre usuario'
      enlace4='Ver perfil'
      enlace5='Salir'/>
      <Inicio/>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals 
reportWebVitals();



/*<App />
  <Hola nombre='ANDERSON'/>*/