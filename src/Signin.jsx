// src/Signin.js
import React, { useState } from 'react';
import './Signin.css'; // Import CSS for styling
import { Link } from 'react-router-dom';
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
    <div>
      <h2>Signin</h2>
    </div>
    
  );
}

export default Signin;