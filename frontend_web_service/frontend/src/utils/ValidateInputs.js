import React from "react";
import '../components/App/App.css';

function validateEmail(email, setIsEmailValid, element){
  
  const EmailRegex = /\S+@\S+\.\S+/;

  if(EmailRegex.test(email)){

    setIsEmailValid(true);
    element.id = 'approved';
  }
  else{
    setIsEmailValid(false);
    element.id = 'not-approved';
  }
}

function validatePassword(password, setIsPasswordValid, element){

  if((password) && (password.length>=8)){

    setIsPasswordValid(true);
    element.id = 'approved';
  }
  else{
    setIsPasswordValid(false);
    element.id = 'not-approved'
  }
}

function validatePasswordconfirmation(password, passwordConfirmation, setPasswordConfirmationCorrect, element){
    
    if((password == passwordConfirmation) && (passwordConfirmation.length>=8)){

      setPasswordConfirmationCorrect(true);
      element.id = 'approved';
    }
    else{
      setPasswordConfirmationCorrect(false);
      element.id = 'not-approved';
    }
}  

function validateUsername(username, setUsernameCorrect, element){
    
  if(username){
      setUsernameCorrect(true);
      element.id = 'approved';
    }
    else{
      setUsernameCorrect(false);
      element.id = 'not-approved'
    }
}

export {validateEmail, validatePassword, validatePasswordconfirmation, validateUsername};