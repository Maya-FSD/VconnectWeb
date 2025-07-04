import React from 'react';
import { Link } from 'react-router-dom';

const sidebarStyle = {
  width: '200px',
  backgroundColor: '#bbfafa',
  color: '##0b8181',
  height: '100%',
  padding: '20px 10px',
  boxSizing: 'border-box',
};

const linkStyle = {
  display: 'block',
  color: '#fff',
  textDecoration: 'none',
  padding: '10px',
  marginBottom: '10px',
  borderRadius: '6px',
  backgroundColor:'#041018',// '#457b9d',
};

const Sidebar = () => {
  return (
    <div style={sidebarStyle}>
      <h3 style={{ color: '##0b8181', marginBottom: '20px' }}>Navigation</h3>
      <Link to="/dashboardSuperAdmin" style={linkStyle}>Dashboard</Link>
      <Link to="/tenantmaster" style={linkStyle}>Tenant Master</Link>
      <Link to="/tenantUpdate" style={linkStyle}>Tenant Update</Link>
      <Link to="/tenantsettings" style={linkStyle}>Tenant Settings</Link>
      <Link to="/codemaster" style={linkStyle}>CodeMaster</Link>
      <Link to="/broadcastmsg" style={linkStyle}>Broadcast Message</Link>
      <Link to="/myprofile" style={linkStyle}>My Profile</Link>
      <Link to="/contact" style={linkStyle}>Contact</Link>
      <Link to="/selectcode" style={linkStyle}>Generate Code</Link>
      
    </div>
  );
};

export default Sidebar;
