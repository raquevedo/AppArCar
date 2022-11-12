import React, { useState } from "react";
import "./App.css";
import {
  useLocation,
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Homepage from "../Homepage/Homepage";
import SignIn from "../SignIn/SignIn";
import DashboardWrapper from "../Dashboard/DashboardWrapper";
import Navbar from "../Shared/Navbar";
import "../../index.css";
import AboutUs from '../AboutUs/AboutUs';
import { isLoggedIn } from '../../utils/isLoggedIn';

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(isLoggedIn())

  return (
    <BrowserRouter>
      <div className="grid-y">
        <div className="cell small-12">
          <Navbar userLoggedIn={userLoggedIn} setUserLoggedIn={setUserLoggedIn}/>
        </div>
        <div className="cell large-12">
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='signin' element={<SignIn setUserLoggedIn={setUserLoggedIn}/>} />
            <Route path='aboutus' element={<AboutUs/>} />
            <Route
              path="dashboard/*"
              element={
                <RequireAuth>
                  <DashboardWrapper />
                </RequireAuth>
              }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

function RequireAuth({ children }) {
  let location = useLocation();

  if (sessionStorage.getItem("token")) {
    return children;
  }
  return <Navigate to="/signin" state={{ from: location }} replace />;
}

export default App;
