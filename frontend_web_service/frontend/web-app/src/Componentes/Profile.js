import React, { useState } from "react";
import ModifyProfile from "./ModifyProfile";
import '../Style/Profile.css';


function Profile(){

    const [click,setClick] = useState(false);
   
    
    

    if(click){
        return(<ModifyProfile></ModifyProfile>)
    }

    function clickLogOut(){

        localStorage.clear();
        window.location.reload();
    }
   
   

    return(

        
        
        <div className="Columna-Der">
               
            <button onClick={(()=> {setClick(!click)})}>Modificar Perfil</button>
            <button onClick={clickLogOut}>Log Out</button>

        </div>
    );
}

export default Profile;