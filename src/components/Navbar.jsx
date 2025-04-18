import React from 'react';

const Navbar = ({ onSelect }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">NZ WEATHER</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => onSelect('home')}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => onSelect('citySelector')}>City Selector</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

