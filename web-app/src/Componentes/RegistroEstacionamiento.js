import React from "react";
import '../Estilos/BotonEnviar.css';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom'
import '../Estilos/Ingresos.css';
import '../Estilos/ContenedorBotones.css';

function RegistroEstacionamiento(){

    const[Nombre,setNombre] = useState('');
    const[Apellido,setApellido] = useState('');
    const[Direccion,setDireccion] = useState('');
    const[Plazas,setPlazas] = useState(0);
    const[RazonSocial,setRazonSocial] = useState(0);
    const[Cuit,setCuit] = useState(0);
    const[NumerodeContacto,setNumerodeContacto] = useState(0);
    let navigate = useNavigate();
    
    const InformacionEnviar = {
        nombre:'',
        apellido:'',
        direccion:'',
        plazas:'',
        cuit:'',
        razonsocial:'',
        numerodecontacto:''
    };

    function IngresarNombre(e){
        setNombre(e.target.value)
    }

    
    function IngresarApellido(e){
        setApellido(e.target.value)
    }

    
    function IngresarDireccion(e){
        setDireccion(e.target.value)
    }

    
    function IngresarPlazas(e){
        setPlazas(e.target.value)
    }

    function IngresarRazonSocial(e){
        setRazonSocial(e.target.value)
    }

    function IngresarCuit(e){
        setCuit(e.target.value)
    }

    function IngresarNumerodeContacto(e){
        setNumerodeContacto(e.target.value)
    }

    function IngresarInformacion(e){
        
        e.preventDefault();
        InformacionEnviar.nombre = Nombre;
        InformacionEnviar.apellido = Apellido;
        InformacionEnviar.direccion = Direccion;
        InformacionEnviar.plazas = Plazas;
        InformacionEnviar.cuit = Cuit;
        InformacionEnviar.razonsocial = RazonSocial;
        InformacionEnviar.numerodecontacto = NumerodeContacto;

        //console.log(InformacionEnviar);

        if((InformacionEnviar.nombre !='') && (InformacionEnviar.apellido !='') && (InformacionEnviar.direccion !='') && (InformacionEnviar.plazas !='') && (InformacionEnviar.cuit !='') && (InformacionEnviar.razonsocial !='') && (InformacionEnviar.numerodecontacto !='')) 
        {
            navigate('/');
        }
        
       
    }
    return(
        <div>
            <form className="Ingresos">
                <input

                placeholder="Nombre"
                type='text'
                onChange={IngresarNombre}
                
                />

                <input

                placeholder="Apellido"
                type='text'
                onChange={IngresarApellido}

                />

                <input

                placeholder="Direccion"
                type='text'
                onChange={IngresarDireccion}

                />

                <input

                placeholder="Plazas"
                type='number'
                onChange={IngresarPlazas}

                />
                 <input
                    placeholder="Cuit"
                    type='number'
                    onChange={IngresarCuit}
                />

                <input
                    placeholder="Razon Social"
                    type='text'
                    onChange={IngresarRazonSocial}
                />
                <input
                    placeholder="Numero de Contacto"
                    type='number'
                    onChange={IngresarNumerodeContacto}
                />
                
            </form>

            <div className="ContenedorBotones">
                <button className="BotonEnviar"  onClick={IngresarInformacion}>Enviar</button>
                <button className="BotonEnviar" onClick={() => {navigate('/registro')}}>Volver a Registro</button>
            </div>

            
        </div>
    );
}

export default RegistroEstacionamiento;