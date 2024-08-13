import React from 'react';

const Header: React.FC = () => {
  return (
    <header style={headerStyle}>
      <h1>My Website Header</h1>
      <nav>
        <ul style={navStyle}>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

const headerStyle = {
  background: '#333',
  color: '#fff',
  padding: '10px 20px',
  textAlign: 'center' as 'center',
};

const navStyle = {
  listStyleType: 'none',
  display: 'flex',
  justifyContent: 'center',
  padding: 0,
};

export default Header;
