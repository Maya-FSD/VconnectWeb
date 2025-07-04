import React from 'react';

const footerStyle = {
  backgroundColor: '#f1f1f1',
  textAlign: 'center',
  padding: '15px',
  marginTop: '40px',
  fontSize: '14px',
  color: '#333',
};

const Footer = () => {
  return (
    <footer style={footerStyle}>
      &copy; {new Date().getFullYear()} My Web App. All rights reserved.
    </footer>
  );
};

export default Footer;
