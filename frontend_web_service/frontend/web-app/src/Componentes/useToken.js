import React from "react";
import {useState} from 'react';

function useToken(){

    const getToken = () =>{

        const tokenString = localStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken?.token; //se usa ? porque cuando accedes por primera vez a la aplicacion el valor de sessionStorage.getitem('token') es indefinido
    }

    const [token,setToken] = useState(getToken());

    const saveToken = userToken => {
        localStorage.setItem('token',JSON.stringify(userToken));
        setToken(userToken.token);
    };

    return{
        setToken: saveToken,
        token
    }
}

export default useToken;