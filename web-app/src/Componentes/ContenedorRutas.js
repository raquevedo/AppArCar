import React from "react";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Inicio from "./Inicio";
import RegistroAsociado from './RegistroAsociado';
import RegistroEstacionamiento from './RegistroEstacionamiento';
import Registro from "./Registro";
import PantallaPerfil from "./PantallaPerfil";
import Error from "./Error";


function ContenedorRutas(){

    return(
        <Router>
            <Routes>
                <Route path='/' element={<Inicio></Inicio>}></Route>
                <Route path='/registro' element={<Registro></Registro>}></Route>
                <Route path='/registroasociado' element={<RegistroAsociado></RegistroAsociado>}></Route>
                <Route path='/registroestacionamiento' element={<RegistroEstacionamiento></RegistroEstacionamiento>}></Route>
                <Route path='/pantallaperfil' element={<PantallaPerfil></PantallaPerfil>}></Route>
                <Route path='*' element={<Error></Error>}></Route>
            </Routes>
        </Router>
    );
}

export default ContenedorRutas;
