import React from 'react';
import './Discoverer1.css';

const Discover: React.FC = () => {
  return (
    <div className="container">
      <nav className="navbar">
        <button className="nav-button active">ALL</button>
        <button className="nav-button">PEOPLE</button>
        <button className="nav-button">EVENTS</button>
        <button className="nav-button">TRENDING</button>
        <button className="nav-button">COLLECTIONS</button>
        <button className="nav-button">CONNECT</button>
      </nav>
      <div className="search-bar">
        <input type="text" placeholder="SEARCH" />
        <button className="search-button">&#128269;</button>
      </div>
      <section className="section trending">
        <h2>TRENDING</h2>
        <div className="card-container">
          <div className="card"></div>
          <div className="card"></div>
        </div>
      </section>
      <section className="section collections">
        <h2>COLLECTIONS</h2>
        <div className="card-container">
          <div className="card"></div>
          <div className="card"></div>
        </div>
      </section>
      <section className="section local">
        <h2>LOCAL</h2>
        <div className="card-container">
          <div className="card"></div>
          <div className="card"></div>
        </div>
      </section>
    </div>
  );
};

export default Discover;
