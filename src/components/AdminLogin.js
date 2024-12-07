import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import adm from "../assets/images/adm.jpg";
import "../assets/styles/style.css";

function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // State for loading
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Reset error message on form submission
    setLoading(true); // Start loading state

    try {
      // Send login request to backend
      const response = await axios.post('http://localhost:3300/user/login', { username, password });

      // If login is successful, store token in localStorage and navigate to admin page
      if (response.status === 200) {
        localStorage.setItem('authToken', response.data.token); // Store token in localStorage
        navigate('/admin'); // Redirect to admin dashboard
      }
    } catch (err) {
      // Handle error if the login fails
      if (err.response && err.response.data) {
        setError(err.response.data.error || 'Invalid username or password');
      } else {
        setError('An error occurred while logging in');
      }
    } finally {
      setLoading(false); // Stop loading state
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <img src={adm} alt="Admin Logo" className="logo" />
        <form onSubmit={handleSubmit}>
          <div className="input-field">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              autoFocus // Automatically focus on the username field
            />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
}

export default AdminLogin;
