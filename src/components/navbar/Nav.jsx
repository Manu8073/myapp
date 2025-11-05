import React, { useContext } from "react";
import logo from "../../assets/logo2.png";
import "./Nav.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/context";

function Nav() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="container">
      <img src={logo} alt="" className="logo-image " />
      <ul>
        {user ? (
          <>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/" onClick={logout}>
                Logout
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
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
          </>
        )}
      </ul>
    </nav>
  );
}

export default Nav;
