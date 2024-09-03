import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './sharedstyle.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'test' && password === 'password') {
      navigate('/home'); // Redirect to home page if login is successful
    } else {
      alert('Invalid credentials');
    }
  };

  const handleAdminLogin = () => {
    // Implement admin login logic here
    // For example, setting fixed credentials for admin
    setUsername('admin@example.com');
    setPassword('adminpassword'); // Placeholder admin password
    handleLogin(new Event('submit')); // Trigger login with admin credentials
  };

  return (
    <div className="app">
      <div className="container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
          <p className="additional-links">
            Don't have an account? <a href="/signup">Sign Up</a>
          </p>
          <a href="#" onClick={handleAdminLogin} className="admin-link">
            Sign in with Admin Email
          </a>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
