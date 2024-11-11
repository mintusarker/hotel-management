import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <h3>NAME OF APPS</h3>
      </div>
      <div className="nav-link-list">
        <li>
          <Link className="link-link">Home</Link>
        </li>
        <li>
          <Link className="link-link">Service</Link>
        </li>
        <li>
          <Link className="link-link">FAQ</Link>
        </li>
        <li>
          <Link className="link-link">Log In</Link>
        </li>
        <li>
          <Link className="link-link">Register</Link>
        </li>
        <li>
          <Link className="link-link">Logout</Link>
        </li>
      </div>
    </div>
  );
};

export default Navbar;
