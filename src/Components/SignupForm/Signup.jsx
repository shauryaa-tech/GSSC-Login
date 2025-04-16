import React, { useState } from 'react';
import './Signup.css'; // Assuming you // have a CSS file for styling
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Here you can handle register logic, like sending data to a server
    console.log('Registering:', formData);
  };

  return (
    <div className='signup-form'>
      <h2>Register</h2>
        <form onSubmit={handleSubmit}>

          <div className='input-box'>
            <input 
              type="text" 
              name="name" 
              placeholder="Name" 
              value={formData.name}
              onChange={handleChange}
              required 
            />
          </div>

          <div className='input-box'>
            <input 
              type="email" 
              name="email" 
              placeholder="Email" 
              value={formData.email}
              onChange={handleChange}
              required 
            />
          </div>

          <div className='input-box'>
            <input 
              type="password" 
              name="password" 
              placeholder="Password" 
              value={formData.password}
              onChange={handleChange}
              required 
            />
          </div>

          <div className='input-box'>
            <input 
              type="password" 
              name="confirmPassword" 
              placeholder="Confirm Password" 
              value={formData.confirmPassword}
              onChange={handleChange}
              required 
            />
          </div>

          <button type="submit">Register</button>

          <div className="register-link">
            <p>Already have a account? <a href="C:\Users\shaur\OneDrive\Desktop\login-form\src\Components\LoginForm\LoginForm.jsx">Login</a></p>
          </div>
      </form>
    </div>
  );
};

export default RegisterPage;