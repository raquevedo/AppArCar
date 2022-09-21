import React from "react";

function ValidateEmail(email){

    const EmailRegex = /\S+@\S+\.\S+/;
  
    if(EmailRegex.test(email)){
      return true;
    }
    else{
      return false;
    }
}

function ValidatePassword(password){

    if ((password != null) && (password.length>=8)){
      return true;
      
    }
    else{
      return false;
    }
}

function ValidatePasswordConfirmation(password,passwordConfirmation){
    
    if(password == passwordConfirmation){
        return true;
    }
    else{
      return false;
    }
}  

function ValidateUsername(username){
    if(username != null){
      return true;
    }
    else{
      return false;
    }
}

export {ValidateEmail,ValidatePassword,ValidatePasswordConfirmation,ValidateUsername};