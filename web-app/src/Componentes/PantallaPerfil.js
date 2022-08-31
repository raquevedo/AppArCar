import React from "react";
import '../Estilos/BotonEnviar.css';
import {useNavigate} from 'react-router-dom';
import '../Estilos/ContenedorBotones.css'

function PantallaPerfil(){

    let Navigate = useNavigate();
    return(
        <div>
            Perfil Iniciado
            <div className="ContenedorBotones">
                <button className="BotonEnviar" onClick={() => {Navigate('/')}}>Inicio</button> 
            </div>
              
        </div>
    );
}

export default PantallaPerfil;