import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillPersonFill, BsFillBarChartFill } from 'react-icons/bs'

function SideNav() {
  return (
    <div className="icon-bar vertical four-up">
      <Link to='/dashboard' className="item">
        <BsFillBarChartFill />
        <label>Dashboard</label>
      </Link>
      <Link to='/dashboard/profile' className="item">
        <BsFillPersonFill />
        <label>Profile</label>
      </Link>
    </div>
  );
}

export default SideNav;