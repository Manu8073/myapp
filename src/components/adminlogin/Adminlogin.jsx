import React from "react";
import "./Adminlogin.css";
import { Link } from "react-router-dom";

function Adminlogin() {
  return (
    <div className="logincontainer">
      <div className="box">
        <form action="#">
          <h1>Voter Login</h1>

          <div className="inputgroup">
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Email/password" />
          </div>
          <div className="inputgroup">
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="password" />
          </div>
          <button type="submit">Log In</button>
          <div className="footer">
            <Link to="/user/register">Don't have an account? Register</Link>
            <Link to="#">Forgot Password</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Adminlogin;
