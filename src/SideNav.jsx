import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faUser, faChartLine, faUserPlus, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import './SideNav.css'; 

const SideNav = ({ isOpen }) => {
  return (
    <div className={`sidenav ${isOpen ? 'open' : ''}`}>
      <Link to="/dashboard">
        <FontAwesomeIcon icon={faTachometerAlt} /> Dashboard
      </Link>
      <Link to="/customer">
        <FontAwesomeIcon icon={faUser} /> Customer
      </Link>
      <Link to="/sales">
        <FontAwesomeIcon icon={faChartLine} /> Sales
      </Link>
      <Link to="/signup">
        <FontAwesomeIcon icon={faUserPlus} /> Signup
      </Link>
      <Link to="/signin">
        <FontAwesomeIcon icon={faSignInAlt} /> Signin
      </Link>
    </div>
  );
}

export default SideNav;