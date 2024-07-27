// src/SideNav.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faUser, faBox, faChevronDown, faFileInvoiceDollar, faUserPlus, faSignInAlt, faUsers } from '@fortawesome/free-solid-svg-icons';
import './SideNav.css'; 

const SideNav = ({ isOpen }) => {
  const [isInventoryOpen, setIsInventoryOpen] = useState(false);
  const [isBillsOpen, setIsBillsOpen] = useState(false);
  const [isPartiesOpen, setIsPartiesOpen] = useState(false); // State for Mo Parties dropdown

  return (
    <div className={`sidenav ${isOpen ? 'sidenav-open' : 'sidenav-closed'} bg-gray-800 text-white h-full`}>
      <Link to="/dashboard" className="sidenav-link hover:bg-pink-700 flex items-center p-2">
        <FontAwesomeIcon icon={faTachometerAlt} className="sidenav-icon mr-2" /> Dashboard
      </Link>

      <div>
        <button 
          className="sidenav-dropdown-button hover:bg-pink-700 flex items-center w-full p-2"
          onClick={() => setIsInventoryOpen(!isInventoryOpen)}
        >
          <FontAwesomeIcon icon={faBox} className="sidenav-icon mr-2" /> Mo Inventory
          <FontAwesomeIcon icon={faChevronDown} className="ml-auto" />
        </button>
        {isInventoryOpen && (
          <div className="sidenav-dropdown-menu">
            <Link to="/inventory/add-products" className="sidenav-dropdown-link hover:bg-pink-700 flex items-center p-2 pl-8">
              <FontAwesomeIcon icon={faBox} className="sidenav-icon mr-2" /> Add Products
            </Link>
          </div>
        )}
      </div>

      <div>
        <button 
          className="sidenav-dropdown-button hover:bg-pink-700 flex items-center w-full p-2"
          onClick={() => setIsBillsOpen(!isBillsOpen)}
        >
          <FontAwesomeIcon icon={faFileInvoiceDollar} className="sidenav-icon mr-2" /> Mo Bills
          <FontAwesomeIcon icon={faChevronDown} className="ml-auto" />
        </button>
        {isBillsOpen && (
          <div className="sidenav-dropdown-menu">
            <Link to="/bills/purchase" className="sidenav-dropdown-link hover:bg-pink-700 flex items-center p-2 pl-8">
              <FontAwesomeIcon icon={faFileInvoiceDollar} className="sidenav-icon mr-2" /> Purchase
            </Link>
            <Link to="/bills/sales" className="sidenav-dropdown-link hover:bg-pink-700 flex items-center p-2 pl-8">
              <FontAwesomeIcon icon={faFileInvoiceDollar} className="sidenav-icon mr-2" /> Sales
            </Link>
          </div>
        )}
      </div>

      <div>
        <button 
          className="sidenav-dropdown-button hover:bg-pink-700 flex items-center w-full p-2"
          onClick={() => setIsPartiesOpen(!isPartiesOpen)}
        >
          <FontAwesomeIcon icon={faUsers} className="sidenav-icon mr-2" /> Mo Parties
          <FontAwesomeIcon icon={faChevronDown} className="ml-auto" />
        </button>
        {isPartiesOpen && (
          <div className="sidenav-dropdown-menu">
            <Link to="/mo-parties/customer" className="sidenav-dropdown-link hover:bg-pink-700 flex items-center p-2 pl-8">
              <FontAwesomeIcon icon={faUser} className="sidenav-icon mr-2" /> Customer
            </Link>
            <Link to="/mo-parties/supplier" className="sidenav-dropdown-link hover:bg-pink-700 flex items-center p-2 pl-8">
              <FontAwesomeIcon icon={faUser} className="sidenav-icon mr-2" /> Supplier
            </Link>
          </div>
        )}
      </div>

      <Link to="/signup" className="sidenav-link hover:bg-pink-700 flex items-center p-2">
        <FontAwesomeIcon icon={faUserPlus} className="sidenav-icon mr-2" /> Signup
      </Link>
      <Link to="/signin" className="sidenav-link hover:bg-pink-700 flex items-center p-2">
        <FontAwesomeIcon icon={faSignInAlt} className="sidenav-icon mr-2" /> Signin
      </Link>
    </div>
  );
}

export default SideNav;
