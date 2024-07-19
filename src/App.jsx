import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideNav from './SideNav';
import Dashboard from './Dashboard';
import Customer from './Customer';
import Sales from './Sales';
import Signup from './Signup';
import Signin from './Signin';
import './App.css'; 

const App = () => {
  return (
    <Router>
      <div className="app">
        <SideNav isOpen={true} /> {/* Always open */}
        <div className="main-content">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/customer" element={<Customer />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;