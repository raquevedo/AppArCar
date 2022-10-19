import React from "react";
import Login from "../Login/Login";
import Register from "../Register/Register";
import useToken from "../../utils/useToken";
import "../../index.css";
import logo from '../../assets/img/logo p.png'

function SignIn() {
  const { setToken } = useToken();
  return (
    <div className="cover-container">
            
            <img src={logo} alt='Logo' className="home-logo"></img>
            
            <div className="grid-x grid-margin-x grid-padding-x grid-margin-y grid-padding-y">
            <div className="cell medium-6 small-12">
              <Login setToken={setToken} />
            </div>
            <div className="cell medium-6 small-12">
              <Register />
            </div>
          </div>
        </div>
  );
}

export default SignIn;
