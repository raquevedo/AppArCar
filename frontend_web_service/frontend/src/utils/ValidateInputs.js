import React from "react";

function validateEmail(email){
  
  const EmailRegex = /\S+@\S+\.\S+/;
  
  return EmailRegex.test(email);

}

function validatePassword(password){

  return ((password) && (password.length>=8));
}

function validatePasswordconfirmation(password, passwordConfirmation){
    
    return (password == passwordConfirmation) && (passwordConfirmation.length>=8);
}  

function validateUsername(username){
    if(username){
      return true;
    }
    else{
      return false;
    }
}

export {validateEmail, validatePassword, validatePasswordconfirmation, validateUsername};