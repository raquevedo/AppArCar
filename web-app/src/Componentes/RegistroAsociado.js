import React from "react";
import {useState} from 'react';
import '../Estilos/BotonEnviar.css';
import {useNavigate} from 'react-router-dom';
import '../Estilos/Ingresos.css';
import '../Estilos/ContenedorBotones.css';


function RegistroAsociado(){

    const [NombreMarca,setNombreMarca] = useState('');
    const [NombreTitular,setNombreTitular] = useState('');
    const [ApellidoTitular,setApellidoTitular] = useState('');
    const [DniTitular,setDniTitular] = useState(0);
    const [RazonSocial,setRazonSocial] = useState(0);
    const [Cuit,setCuit] = useState(0);
    const [Direccion,setDireccion] = useState(0);
    let navigate = useNavigate();
    const InformacionEnviar = {
        nombremarca:'',
        nombretitular:'',
        apellidotitular:'',
        dnititular:'',
        razonsocial:'',
        cuit:'',
        direccion:''
    }

   
    
    function IngresarNombreMarca(e){

        setNombreMarca(e.target.value);

    }

    function IngresarNombreTitular(e){

        setNombreTitular(e.target.value);

    }

    function IngresarApellidoTitular(e){

        setApellidoTitular(e.target.value);

    }

    function IngresarDniTitular(e){

        setDniTitular(e.target.value);

    }

    function IngresarCuit(e){

        setCuit(e.target.value);

    }

    function IngresarRazonSocial(e){

        setRazonSocial(e.target.value);

    }

    function IngresarDireccion(e){

        setDireccion(e.target.value);

    }

    function IngresarInformacion(e){

        e.preventDefault();
        InformacionEnviar.nombremarca = NombreMarca;
        InformacionEnviar.nombretitular = NombreTitular;
        InformacionEnviar.apellidotitular = ApellidoTitular;
        InformacionEnviar.dnititular = DniTitular;
        InformacionEnviar.razonsocial = RazonSocial;
        InformacionEnviar.cuit = Cuit;
        InformacionEnviar.direccion = Direccion;

        //console.log(InformacionEnviar);

        if((InformacionEnviar.nombremarca !='') && (InformacionEnviar.nombretitular !='') && (InformacionEnviar.apellidotitular !='') && (InformacionEnviar.dnititular !='') && (InformacionEnviar.razonsocial !='') && (InformacionEnviar.cuit !='') && (InformacionEnviar.direccion !=''))
        {
            navigate('/');
        }
        
    }
    

    return(
        <div>
                <form className="Ingresos">
                    <input
                            placeholder="Nombre Marca"
                            type='text'
                            onChange={IngresarNombreMarca}
                            />
                        
                        <input
                            placeholder="Nombre Titular"
                            type='text'
                            onChange={IngresarNombreTitular}
                            />

<                       input
                            placeholder="Apellido Titular"
                            type='text'
                            onChange={IngresarApellidoTitular}
                            />

                        <input
                            placeholder="DNI Titular"
                            type='number'
                            onChange={IngresarDniTitular}
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
                            placeholder="Direccion"
                            type='text'
                            onChange={IngresarDireccion}
                            />
    
                </form>


                <div className='ContenedorBotones'>
                    <button className="BotonEnviar" onClick={IngresarInformacion}>Enviar</button>
                    <button className="BotonEnviar" onClick={() => {navigate('/registro')}}>Volver a Registro</button>    
                </div>
                
        </div>
    );
}

export default RegistroAsociado;