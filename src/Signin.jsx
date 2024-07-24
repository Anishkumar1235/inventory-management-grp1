// src/Signin.js
import React, { useState } from 'react';
import './Signin.css'; // Import CSS for styling

const Signin = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign-in logic here, e.g., send data to an API
    console.log('Form submitted', formData);
  };

  return (
    <div className="signin-container">
      <div className="signin-form">
        <h2 className="signin-title">Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="signin-button">
            Sign In
          </button>
        </form>
        <a href="/forgot-password" className="forgot-password-link">
          Forgot Password?
        </a>
      </div>
    </div>
  );
};

export default Signin;