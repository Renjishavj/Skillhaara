import React, { useState } from 'react';
import adm from "../assets/images/adm.jpg";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post('http://localhost:3300/user/login', { username, password });
      if (response.status === 200) {
       
        localStorage.setItem('authToken', response.data.token);
        
       
        navigate('/admin');
      }
    } catch (err) {
     
      if (err.response && err.response.data) {
        setError(err.response.data.error || 'An error occurred');
      } else {
        setError('An error occurred while logging in');
      }
    }
  };

 
  return (
    <div className="login-container">
      <div className="login-card">
        <img src={adm} alt="Logo" className="logo" />
        
        <form onSubmit={handleSubmit}>
          <div className="input-field">
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-field">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
}

export default AdminLogin;
