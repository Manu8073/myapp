import React, { useState } from "react";
import "./Adminlogin.css";
import { Link } from "react-router-dom";

function Adminlogin() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handle = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <div className="logincontainer">
      <div className="box">
        <form action="#" onSubmit={handle}>
          <h1>Admin Login</h1>

          <div className="inputgroup">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(event) => setemail(event.target.value)}
            />
          </div>
          <div className="inputgroup">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(event) => setpassword(event.target.value)}
            />
          </div>
          <button type="submit">Log In</button>
          <div className="footer">
            <Link to="/user/register">If you are a voter? Register</Link>
            <Link to="#">Forgot Password</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Adminlogin;
