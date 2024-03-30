import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:2000/api/users/login', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        console.log('Login successful:', data);
        localStorage.setItem('username', data.user.name);
        navigate('/createEvent');
        location.reload();
      } else {
        console.error('Login failed:', data.message);
        setError(data.message); // Set error message if login fails
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError('An error occurred during login');
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Login</h1>
      {error && <div className="error-message">{error}</div>} {/* Display error message */}
      <form onSubmit={handleLogin} className="login-form">
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email: </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ maxWidth: '300px' }} 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password: </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ maxWidth: '300px' }} 
          />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
};

export default Login;
