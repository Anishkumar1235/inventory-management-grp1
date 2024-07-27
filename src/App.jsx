// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideNav from './SideNav';
import Dashboard from './Dashboard';
import Customer from './Customer';
import Supplier from './Supplier'; // Import the Supplier component
import MoInventory from './MoInventory';
import AddProducts from './AddProducts';
import MoBills from './MoBills';
import Sales from './Sales';
import Purchase from './Purchase';
import Signup from './Signup';
import Signin from './Signin';
import MoParties from './MoParties'; // Import the MoParties component
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app flex">
        <SideNav isOpen={true} /> {/* Always open */}
        <div className="main-content flex-1 p-4">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/inventory" element={<MoInventory />} />
            <Route path="/inventory/add-products" element={<AddProducts />} />
            <Route path="/bills" element={<MoBills />} />
            <Route path="/bills/purchase" element={<Purchase />} />
            <Route path="/bills/sales" element={<Sales />} />
            <Route path="/mo-parties" element={<MoParties />} /> {/* Add this route */}
            <Route path="/mo-parties/customer" element={<Customer />} /> {/* Customer under Mo Parties */}
            <Route path="/mo-parties/supplier" element={<Supplier />} /> {/* Supplier under Mo Parties */}
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
