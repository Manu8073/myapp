import React from "react";
import logo from "../../assets/logo2.png";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="container">
      <img src={logo} alt="" className="logo-image " />
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/about">aboout</Link>
        </li>
        <li>
          <Link to="/user/login">Login</Link>
        </li>
        <li>
          <Link to="/user/Register">Register</Link>
        </li>
        <li>
          <Link to="/admin/login">Admin</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
