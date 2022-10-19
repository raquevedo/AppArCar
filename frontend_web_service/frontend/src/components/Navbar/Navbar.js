import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo solo.png";
import "../../index.css";

const Navbar = ({ isScrolling }) => {
  const toTheTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <nav className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>
      <Link to="/">
        <img src={logo} alt="Logo" className="navbar-logo" onClick={toTheTop}></img>
      </Link>
    </nav>
  );
};

export default Navbar;
