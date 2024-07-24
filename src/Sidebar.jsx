// src/components/Sidebar.js
import React from 'react';

const Sidebar = () => {
  return (
    <div className="bg-gray-900 text-white w-64 h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Material Dashboard 2</h1>
      <ul>
        <li className="mb-4">
          <a href="#" className="flex items-center space-x-2">
            <span className="bg-pink-500 p-2 rounded">Dashboard</span>
          </a>
        </li>
        <li className="mb-4">Tables</li>
        <li className="mb-4">Billing</li>
        <li className="mb-4">Virtual Reality</li>
        <li className="mb-4">RTL</li>
        <li className="mb-4">Notifications</li>
      </ul>
      <div className="mt-auto">
        <ul>
          <li className="mb-4">Profile</li>
          <li className="mb-4">Sign In</li>
          <li className="mb-4">Sign Up</li>
        </ul>
      </div>
      <button className="bg-pink-500 w-full py-2 mt-4">Upgrade to Pro</button>
    </div>
  );
};

export default Sidebar;