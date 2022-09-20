import react from 'react';

function ValidatePassword(password){

  if ((password != '') && (password.length>=8)){
    return true;
    
  }
  else{
    alert('Enter a password with 8 digits or more');
  }
}
export default ValidatePassword;