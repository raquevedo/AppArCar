import React from "react";
import '../components/App/App.css';

function validateEmail(email, setisEmailvalid, element){
  
  const emailRegex = /\S+@\S+\.\S+/;

  if(emailRegex.test(email)){

    setisEmailvalid(true);
    element.id = 'approved';
  }
  else{
    setisEmailvalid(false);
    element.id = 'not-approved';
  }
}

function validatePassword(password, setisPasswordvalid, element){

  if((password) && (password.length >= 8)){

    setisPasswordvalid(true);
    element.id = 'approved';
  }
  else{
    setisPasswordvalid(false);
    element.id = 'not-approved'
  }
}

function validatePasswordconfirmation(password, passwordConfirmation, setpasswordConfirmationcorrect, element){
    
    if((password == passwordConfirmation) && (passwordConfirmation.length >= 8)){

      setpasswordConfirmationcorrect(true);
      element.id = 'approved';
    }
    else{
      setpasswordConfirmationcorrect(false);
      element.id = 'not-approved';
    }
}  

function validateUsername(username, setUsernamecorrect, element){
    
  if(username){
      setUsernamecorrect(true);
      element.id = 'approved';
    }
    else{
      setUsernamecorrect(false);
      element.id = 'not-approved'
    }
}

export {validateEmail, validatePassword, validatePasswordconfirmation, validateUsername};