import React from "react";
import Login from "../Login/Login";
import Register from "../Register/Register";
import useToken from "../../utils/useToken";
import "./index.css";

function SignIn() {
  const { token, setToken } = useToken();
  return (
    <div className="f-container">
    
        
        <div className="box-forms">
         
            <div className="form">
              <Login setToken={setToken} />
            </div>
          
          
            <div className="form">
              <Register />
            </div>
          
        </div>
      </div>
   
  );
}

export default SignIn;
