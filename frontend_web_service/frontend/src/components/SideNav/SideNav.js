import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillHouseFill, BsFillPersonFill, BsFillBarChartFill } from 'react-icons/bs'

function SideNav() {
  return (
    <div className="icon-bar vertical four-up">
      <Link to='/' className="item">
        <BsFillHouseFill />
        <label>Home</label>
      </Link>
      <Link to='/dashboard' className="item">
        <BsFillBarChartFill />
        <label>Dashboard</label>
      </Link>
      <Link to='/profile' className="item">
        <BsFillPersonFill />
        <label>Profile</label>
      </Link>
    </div>
  );
}

export default SideNav;