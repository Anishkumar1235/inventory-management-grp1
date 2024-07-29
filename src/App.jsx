// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideNav from './SideNav';
import Dashboard from './Dashboard';
import Customer from './Customer';
import MoInventory from './MoInventory';
import AddProducts from './AddProducts';
import MoBills from './MoBills'; // Import the MoBills component
import Sales from './Sales'; // Import the Sales component
import Purchase from './Purchase'; // Import if you have a separate component for Purchase
import Signup from './Signup';
import Signin from './Signin';
import './App.css'; 

const App = () => {
  return (
    <Router>
      <div className="app flex">
        <SideNav isOpen={true} /> {/* Always open */}
        <div className="main-content flex-1 p-4">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/customer" element={<Customer />} />
            <Route path="/inventory" element={<MoInventory />} />
            <Route path="/inventory/add-products" element={<AddProducts />} />
            <Route path="/bills" element={<MoBills />} />
            <Route path="/bills/purchase" element={<Purchase />} />
            <Route path="/bills/sales" element={<Sales />} />
            <Route path="/task" element={<Task />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
          </Routes>
        
        </div>
      </div>
    </Router>

  );
}

export default App;
