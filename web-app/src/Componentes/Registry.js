import react from 'react';
import {useState} from 'react';
import '../Style/ButtonSend.css';
import {useNavigate} from 'react-router-dom'
import '../Style/Enter.css';
import '../Style/ContainerRegistry.css';
import '../Style/ContainerButtonRegistry.css';
//import '../Estilos/ContainerForm.css';
import '../Style/Registry.css';


function Registry(){

const [isCheckedA,setIsCheckedA] = useState(false);
const [isCheckedE,setIsCheckedE] = useState(false);
const[User,SetUser] = useState('');
const[Mail,SetMail] = useState('');
const[Password,SetPassword] = useState('');
const navigate = useNavigate();
const InformationSend = {
    user:'',
    mail:'',
    password:'',
    checkedA:false,
    checkedE:false,
}




function ClickA(){

    setIsCheckedA(!isCheckedA);

    if(isCheckedE){
        setIsCheckedE(!isCheckedE); 
    }
    
}

function ClickE(){
    setIsCheckedE(!isCheckedE);

    if(isCheckedA){
        setIsCheckedA(!isCheckedA); 
    }
}

function HandleUser(e){

    SetUser(e.target.value);

}

function HandleMail(e){

    SetMail(e.target.value);

}

function HandlePassword(e){

    SetPassword(e.target.value);

}
function SignIn(){
    
    InformationSend.password = Password;
    InformationSend.user = User;
    InformationSend.mail = Mail;
    InformationSend.isCheckedA = isCheckedA;
    InformationSend.isCheckedE= isCheckedE;
    

    
    //console.log(InformacionEnviar);
    if((isCheckedA) && (!isCheckedE) && (InformationSend.password != '') && (InformationSend.user != '') && (InformationSend.mail != '')) {

        navigate('/registrya');
    }
    else if ((!isCheckedA) && (isCheckedE) && (InformationSend.password != '') && (InformationSend.user != '') && (InformationSend.mail != '')){
        navigate('/registrye')
    }
}
    return(
        <div>

        <div className='ContainerRegistry'>

            <form className='Ingresos'>
                <input
                    placeholder='Usuario'
                    type='text'
                    onChange={HandleUser}
                    className='InputRegistry1'
                    />

                <input
                    placeholder='Mail'
                    type='text'
                    onChange={HandleMail}
                    className='InputRegistry2'
                    />

                <input
                    placeholder='Contraseña'
                    type='text'
                    onChange={HandlePassword}
                    className='InputRegistry3'
                    />

            <div>
                <input
                    value='Asociado'        
                    type='checkbox'
                    checked={isCheckedA}
                    onChange={ClickA}
                    className='InputRegistry4'
                    
                    />
                    Asociado
            </div>

            <div>
            <input
                    value='Conductor'        
                    type='checkbox'
                    checked={isCheckedE}
                    onChange={ClickE}
                    className='Input'
                    
                    />
                    Estacionamiento
            </div>


            </form>

            <div className='ContenedorBotonesRegistro'>
                <button className='BotonEnviar' onClick={SignIn}>Registrarse</button>
                
            </div>


           
        </div>

        <button className='BotonInicio' onClick={() =>{navigate('/')}}>Inicio</button>

        </div>

    );
}

export default Registry;