import React from "react";
import {useState} from 'react';
import '../Estilos/BotonEnviar.css';
import {useNavigate} from 'react-router-dom';
import '../Estilos/Ingresos.css';
import '../Estilos/ContenedorBotones.css';


function Inicio(){

    const[Usuario,setUsuario] = useState('');
    const[Contraseña,setContraseña] = useState('');
    const InformacionEnviada = {

        usuario:'',
        contraseña:''
    }

    let navigate = useNavigate();
   
function ManejarUsuario(e){
    setUsuario(e.target.value);
}

function ManejarContraseña(e){
    setContraseña(e.target.value);
}

function IngresarInformacion(e){

    e.preventDefault();
    InformacionEnviada.usuario = Usuario;
    InformacionEnviada.contraseña = Contraseña;
    //console.log(InformacionEnviada);
    if((InformacionEnviada.usuario != '') && (InformacionEnviada.contraseña != ''))
    {
        
        if((Usuario === 'usuario') && (Contraseña === 'contraseña')){
            navigate('/pantallaperfil');
        }
    }
    
}




    return(
        <div>
            <form className="Ingresos">

                    <input
                            placeholder="Usuario"
                            type='text'
                            name='texto'
                            onChange={ManejarUsuario}
                        />

                    <input
                            placeholder="Contraseña"
                            type='text'
                            name='texto'
                            onChange={ManejarContraseña}
                        />
            </form>

            <div className="ContenedorBotones">
                <button className="BotonEnviar" onClick={IngresarInformacion}>Ingresar</button>
                <button className="BotonEnviar" onClick={() => {navigate('/registro')}}>Registrarse</button>
            </div>
            
        </div>
    );
}

export default Inicio;