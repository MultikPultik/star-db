import React, { Component } from "react";

import "./header.css";

const Header = () => {
  return (
    <nav className="navbar d-flex">
      <h2>Star DB</h2>
      <ul className="nav nav-header">
        <li className="nav-item">
          <a className="nav-link" href="#">
            People
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Planets
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Starships
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
