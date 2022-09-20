import React from "react";

function ValidateUsername(username){
  if(username != ''){
    return true;
  }
  else{
    alert('Enter a username');
  }
}
export default ValidateUsername;
