import React from "react";
import { Link } from "react-router-dom";
import { grey } from '@mui/material/colors';
import HomeIcon from "@mui/icons-material/HomeOutlined";
import PersonIcon from "@mui/icons-material/PersonOutlineOutlined";
import ListIcon from "@mui/icons-material/ListAltOutlined";

export default function Sidenav ({setShowSideNav}) {

  const hideSideNav = () => {
    setShowSideNav(false);
  }

  return(
    <div id="sidenav-container" onClick={hideSideNav}>
      <div id="sidenav">
        <div id="sidenav-link">
          <Link to='/dashboard' onClick={hideSideNav}>
            <div className="grid-x">
              <div className="cell small-2">
                <div id="icon-container">
                  <HomeIcon fontSize="large" sx={{ color: grey[50] }}/>
                </div>
              </div>
              <div className="cell small-10">
                <p className="sidenav-text">Dashboard</p>
              </div>
            </div>
          </Link>
        </div>
        <div id="sidenav-link">
          <Link to='/dashboard/profile' onClick={hideSideNav}>
            <div className="grid-x">
              <div className="cell small-2">
                <div id="icon-container">
                  <PersonIcon fontSize="large" sx={{ color: grey[50] }}/>
                </div>
              </div>
              <div className="cell small-10">
                <p className="sidenav-text">Profile</p>
              </div>
            </div>
          </Link>
        </div>
        <div id="sidenav-link">
          <Link to='/dashboard/history' onClick={hideSideNav}>
            <div className="grid-x">
              <div className="cell small-2">
                <div id="icon-container">
                  <ListIcon fontSize="large" sx={{ color: grey[50] }}/>
                </div>
              </div>
              <div className="cell small-10">
                <p className="sidenav-text">Transactions</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}