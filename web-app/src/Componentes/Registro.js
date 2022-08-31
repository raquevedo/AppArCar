import react from 'react';
import {useState} from 'react';
import '../Estilos/BotonEnviar.css';
import {useNavigate} from 'react-router-dom'
import '../Estilos/Ingresos.css';
import '../Estilos/ContenedorBotones.css';

function Registro(){

const [isCheckedAsociado,setIsCheckedAsociado] = useState(false);
const [isCheckedEstacionamiento,setIsCheckedEstacionamiento] = useState(false);
const[Usuario,SetUsuario] = useState('');
const[Mail,SetMail] = useState('');
const[Contraseña,SetContraseña] = useState('');
const navigate = useNavigate();
const InformacionEnviar = {
    usuario:'',
    mail:'',
    contraseña:'',
    checkedAsociado:false,
    checkedEstacionamiento:false,
}


function ClickAsociado(){

    setIsCheckedAsociado(!isCheckedAsociado);

    if(isCheckedEstacionamiento){
        setIsCheckedEstacionamiento(!isCheckedEstacionamiento); //elije solo asociado
    }
    
}

function ClickEstacionamiento(){
    setIsCheckedEstacionamiento(!isCheckedEstacionamiento);

    if(isCheckedAsociado){
        setIsCheckedAsociado(!isCheckedAsociado); //elije solo estacionamiento 
    }
}

function ManejarUsuario(e){

    SetUsuario(e.target.value);

}

function ManejarMail(e){

    SetMail(e.target.value);

}

function ManejarContraseña(e){

    SetContraseña(e.target.value);

}
function Registrarse(){
    
    InformacionEnviar.contraseña = Contraseña;
    InformacionEnviar.usuario = Usuario;
    InformacionEnviar.mail = Mail;
    InformacionEnviar.checkedAsociado = isCheckedAsociado;
    InformacionEnviar.checkedEstacionamiento= isCheckedEstacionamiento;
    
    //console.log(InformacionEnviar);
    if((InformacionEnviar.contraseña != '') && (InformacionEnviar.usuario != '') && (InformacionEnviar.mail != ''))
    {
        if((isCheckedAsociado) && (!isCheckedEstacionamiento)) {

            navigate('/registroasociado');
        }
        else if ((!isCheckedAsociado) && (isCheckedEstacionamiento)){
            navigate('/registroestacionamiento')
        }
    }
    
}
    return(

        <div>

            <form className='Ingresos'>
                <input
                    placeholder='Usuario'
                    type='text'
                    onChange={ManejarUsuario}
                    />

                <input
                    placeholder='Mail'
                    type='text'
                    onChange={ManejarMail}
                    />

                <input
                    placeholder='Contraseña'
                    type='text'
                    onChange={ManejarContraseña}
                    />

            <div>
                <input
                    value='Asociado'        
                    type='checkbox'
                    checked={isCheckedAsociado}
                    onChange={ClickAsociado}
                    
                    />
                    Asociado
            </div>

            <div>
            <input
                    value='Conductor'        
                    type='checkbox'
                    checked={isCheckedEstacionamiento}
                    onChange={ClickEstacionamiento}
                    
                    />
                    Estacionamiento
            </div>


            </form>

            <div className='ContenedorBotones'>
                <button className='BotonEnviar' onClick={Registrarse}>Registrarse</button>
                <button className='BotonEnviar' onClick={() =>{navigate('/')}}>Inicio</button>
            </div>
            
                


        </div>

    );
}

export default Registro;