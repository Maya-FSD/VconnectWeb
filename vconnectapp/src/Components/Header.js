import React from 'react';
import { Link } from 'react-router-dom';

const headerStyle = {
  backgroundColor:'#bbfafa',// '#1d3557',
  color: '#0b8181',
  padding: '15px 20px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const navStyle = {
  display: 'flex',
  gap: '20px',
};

const linkStyle = {
  color: '#0b8181',
  textDecoration: 'none',
  fontWeight: 'bold',
};

const Header = () => {
  return (
    <header style={headerStyle}>
      <img src="../../public/Logo.png" alt="Logo" style={{ borderRadius: '50%' }} />
      <h2 style={{ margin: 0 }}>VConnect Web App</h2>
      <nav style={navStyle}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/register" style={linkStyle}>Signup</Link>
        <Link to="/dashboard" style={linkStyle}>Contact us</Link>
      </nav>
    </header>
  );
};

export default Header;
