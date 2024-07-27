// src/SideNav.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faUser, faBox, faChevronDown, faFileInvoiceDollar, faUserPlus, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import './SideNav.css'; 

const SideNav = ({ isOpen }) => {
  const [isInventoryOpen, setIsInventoryOpen] = useState(false);
  const [isBillsOpen, setIsBillsOpen] = useState(false);

  return (
    <div className={`sidenav ${isOpen ? 'sidenav-open' : 'sidenav-closed'}`}>
      <Link to="/dashboard" className="sidenav-link hover:bg-pink-700">
        <FontAwesomeIcon icon={faTachometerAlt} className="sidenav-icon" /> Dashboard
      </Link>
      <Link to="/customer" className="sidenav-link hover:bg-pink-700">
        <FontAwesomeIcon icon={faUser} className="sidenav-icon" /> Customer
      </Link>

      <div>
        <button 
          className="sidenav-dropdown-button hover:bg-pink-700"
          onClick={() => setIsInventoryOpen(!isInventoryOpen)}
        >
          <FontAwesomeIcon icon={faBox} className="sidenav-icon" /> Mo Inventory
          <FontAwesomeIcon icon={faChevronDown} className="sidenav-icon dropdown-icon" />
        </button>
        {isInventoryOpen && (
          <div className="sidenav-dropdown-menu">
            <Link to="/inventory/add-products" className="sidenav-dropdown-link hover:bg-pink-700">
              Add Products
            </Link>
          </div>
        )}
      </div>

      <div>
        <button 
          className="sidenav-dropdown-button hover:bg-pink-700"
          onClick={() => setIsBillsOpen(!isBillsOpen)}
        >
          <FontAwesomeIcon icon={faFileInvoiceDollar} className="sidenav-icon" /> Mo Bills
          <FontAwesomeIcon icon={faChevronDown} className="sidenav-icon dropdown-icon" />
        </button>
        {isBillsOpen && (
          <div className="sidenav-dropdown-menu">
            <Link to="/bills/purchase" className="sidenav-dropdown-link hover:bg-pink-700">
              Purchase
            </Link>
            <Link to="/bills/sales" className="sidenav-dropdown-link hover:bg-pink-700">
              Sales
            </Link>
          </div>
        )}
      </div>

      <Link to="/signup" className="sidenav-link hover:bg-pink-700">
        <FontAwesomeIcon icon={faUserPlus} className="sidenav-icon" /> Signup
      </Link>
      <Link to="/signin" className="sidenav-link hover:bg-pink-700">
        <FontAwesomeIcon icon={faSignInAlt} className="sidenav-icon" /> Signin
      </Link>
    </div>
  );
}

export default SideNav;
