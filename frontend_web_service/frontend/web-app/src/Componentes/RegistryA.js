import React from "react";
import {useState} from 'react';
import '../Style/ButtonSend.css';
import {useNavigate} from 'react-router-dom';
import '../Style/Enter.css';
import '../Style/RegistryA.css';


function RegistryA(){

    const [NameBrand,setNameBrand] = useState('');
    const [NameHolder,setNameHolder] = useState('');
    const [SurnameHolder,setSurnameHolder] = useState('');
    const [DniHolder,setDniHolder] = useState(0);
    const [BusinessName,setBusinessName] = useState(0);
    const [Cuit,setCuit] = useState(0);
    const [Direction,setDirection] = useState(0);
    let navigate = useNavigate();
    
    const InformationSend = {
        namebrand:'',
        nameholder:'',
        surnameholder:'',
        dniholder:0,
        businessname:'',
        cuit:0,
        direction:0
    }

 
    function EnterNameBrand(e){

        setNameBrand(e.target.value);

    }

    function EnterNameHolder(e){

        setNameHolder(e.target.value);

    }

    function EnterSurnameHolder(e){

        setSurnameHolder(e.target.value);

    }

    function EnterDniHolder(e){

        setDniHolder(e.target.value);

    }

    function EnterCuit(e){

        setCuit(e.target.value);

    }

    function EnterBusinessName(e){

        setBusinessName(e.target.value);

    }

    function EnterDirection(e){

        setDirection(e.target.value);

    }

    function EnterInformation(e){

        e.preventDefault();
        InformationSend.nameBrand = NameBrand;
        InformationSend.nameholder = NameHolder;
        InformationSend.surnameholder = SurnameHolder;
        InformationSend.dniholder = DniHolder;
        InformationSend.businessname = BusinessName;
        InformationSend.cuit = Cuit;
        InformationSend.direction = Direction;

        //console.log(InformacionEnviar);

        if((InformationSend.namebrand != '' ) && (InformationSend.nameholder != '' ) && (InformationSend.surnameholder != '' ) && (InformationSend.dniholder != '' ) && (InformationSend.businessname != '' ) && (InformationSend.cuit != '' ) && (InformationSend.direction != '' )){

            navigate('/');
    
        }

        
    }

    

        
    

    
    

    return(

        <div>
        <div className="ContainerRegistry">
                <form className="Ingresos">
                    <input
                            placeholder="Nombre Marca"
                            type='text'
                            onChange={EnterNameBrand}
                            className='InputRegistryA1'
                            />
                        
                        <input
                            placeholder="Nombre Titular"
                            type='text'
                            onChange={EnterNameHolder}
                            className='InputRegistryA2'
                            />

<                       input
                            placeholder="Apellido Titular"
                            type='text'
                            onChange={EnterSurnameHolder}
                            className='InputRegistryA3'
                            />

                        <input
                            placeholder="DNI Titular"
                            type='number'
                            onChange={EnterDniHolder}
                            className='InputRegistryA4'
                            />

                        <input
                            placeholder="Cuit"
                            type='number'
                            onChange={EnterCuit}
                            className='InputRegistryA5'
                            />

                        <input
                            placeholder="Razon Social"
                            type='text'
                            onChange={EnterBusinessName}
                            className='InputRegistryA6'
                            />

                        <input
                            placeholder="Direccion"
                            type='number'
                            onChange={EnterDirection}
                            className='InputRegistryA7'
                            />
    
                </form>



                <button className="BotonEnviarA" onClick={EnterInformation}>Enviar</button>
                
        </div>

        <button className="BotonRegistry" onClick={() => {navigate('/registry')}}>Volver Registro</button>

        </div>

    );
}

export default RegistryA;