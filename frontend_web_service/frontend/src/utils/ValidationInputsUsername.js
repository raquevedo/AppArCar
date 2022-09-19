import React from "react";

function ValidationInputsUsername(username){
    if(username != ''){
          return true;
      }
      else{
        alert('Enter a username');
      }
}
export default ValidationInputsUsername;
