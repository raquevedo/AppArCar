import React from "react";
import {useState} from 'react';
import '../Style/ButtonSend.css';
import {useNavigate} from 'react-router-dom';
import '../Style/Enter.css';
import '../Style/ContainerButtons.css';
import PropTypes from 'prop-types';
import '../Style/Login.css';
import Profile from './Profile';
import useToken from './useToken';




async function LoginUser(credentials){
    return fetch('http://localhost:8080/Login',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(credentials)
    })
    .then(data => data.json())
}

function Login(){

    const[User,setUser] = useState();
    const[Password,setPassword] = useState();
    const {token,setToken} = useToken();
    
    let navigate = useNavigate();
    const InformationSend = {

        user:'',
        password:''
    }

    const handleSubmit = async e => {

        e.preventDefault();
        const token = await LoginUser ({
            User,
            Password
        });
    
        setToken(token);
        
    }

    if(token){
        return(<Profile></Profile>);
    }

    
   
function HandleUser(e){
    setUser(e.target.value);
}

function HandlePassword(e){
    setPassword(e.target.value);
}

function EnterInformation(e){

    e.preventDefault();
    
    InformationSend.user = User;
    InformationSend.password = Password;
    
    //console.log(InformacionEnviada);
    if((InformationSend.user != '') && (InformationSend.password != ''))
    {
        
        // if((Usuario === 'usuario') && (Contraseña === 'contraseña')){
        //     navigate('/pantallaperfil');
        // }
    }
    
}

return(
    
    <div className="login-wrapper">
        
            <form className="Form-container" onSubmit={handleSubmit}>

                    <input
                            placeholder="Usuario"
                            type='text'
                            name='texto'
                            onChange={HandleUser}
                            className='Input1'
                        />

                    <input
                            placeholder="Contraseña"
                            type='text'
                            name='texto'
                            onChange={HandlePassword}
                            className='Input2'
                        />
                <div className="ContenedorBotones">
                    <button className="BotonIngreso" type="submit">Ingresar</button>
                 </div>

                 <div className="ContenedorBotones">
                <button className="BotonRegistro" onClick={() => {navigate('/registry')}}>Registrarse</button>
            </div>
            </form>

            
            
        
        </div>

        
    );
}

Login.prototypes = {
    setToken:PropTypes.func.isRequired 
};


export default Login;