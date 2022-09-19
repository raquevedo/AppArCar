import React from "react";
import {useState} from 'react';

function ValidationInputsEmail(email){

    const EmailRegex = /\S+@\S+\.\S+/;
    
    if(EmailRegex.test(email)){
        
        return true;
        
    }
    else{
      alert('Enter an email with the format example@example.com')
    }

  
   
    
   
}

export default ValidationInputsEmail;