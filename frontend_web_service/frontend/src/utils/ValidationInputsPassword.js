import react from 'react';

function ValidationInputsPassword(password,passwordlenght){

    
    
    let Plength = 0;

    Plength = passwordlenght;

   if ((password != '') && (Plength>=8)){
      return true;
    }
    else{
      alert('Enter a password with 8 digits or more');
    }
    
   
}

export default ValidationInputsPassword;