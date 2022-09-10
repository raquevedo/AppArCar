import React from "react";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Login from "./Login";
import RegistryA from './RegistryA';
import RegistryE from './RegistryE';
import Registry from "./Registry";






function Path(){

    
    return(
        
        <Router>
            <Routes>
                <Route path='/' element={<Login></Login>}></Route>
                <Route path='/registry' element={<Registry></Registry>}></Route>
                <Route path='/registrya' element={<RegistryA></RegistryA>}></Route>
                <Route path='/registrye' element={<RegistryE></RegistryE>}></Route>
                
                
            </Routes>
        </Router>               
    );
}

export default Path;