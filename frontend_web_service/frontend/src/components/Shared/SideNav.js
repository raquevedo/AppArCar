import React from "react";
import { Link } from "react-router-dom";
import { BsFillPersonFill, BsFillBarChartFill } from "react-icons/bs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styled from 'styled-components';


const StyledLink = styled(Link)`
    color: red;
    background: transparent;
    margin: "1rem",
    textDecoration: "none",
    }
`;

const linksidecell = {
  margin: "1rem",
  textDecoration: "none",
  color: 'white',
  background: "transparent",
  fontSize: "20px"

};

function SideNav() {
  return (
    <div class="grid-y  grid-margin-y">
      <div class="cell grid-padding-x grid-margin-x">
        <div class="grid-x  grid-margin-x grid-padding-x side-cell">
          <div class="cell ">
            <BsFillBarChartFill />
          </div>
          <div class="cell">
            
            <Link style={linksidecell} className="item"  to="/dashboard" >
              Dashboard
            </Link>
          </div>
        </div>
      </div>
      <div class="cell grid-padding-x grid-margin-x">
        <div class="grid-x  grid-margin-x grid-padding-x side-cell">
          <div class="cell ">
            <BsFillPersonFill />
          </div>
          <div class="cell">
            
            <Link style={linksidecell} className="item"  to="/dashboard/profile" >
              Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideNav;
