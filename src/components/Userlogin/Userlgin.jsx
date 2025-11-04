import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Userlogin.css";

function Userlgin() {
  const [mobile, setmobile] = useState("");
  const [password, setpassword] = useState("");

  const handle = (e) => {
    e.preventDefault();
    console.log(mobile, password);
    setmobile("");
    setpassword("");
  };
  return (
    <div className="logincontainer">
      <div className="box">
        <form action="#" onSubmit={handle}>
          <h1>Voter Login</h1>

          <div className="inputgroup">
            <label htmlFor="moble">Mobile number</label>
            <input
              type="tel"
              placeholder="mobile number"
              value={mobile}
              onChange={(event) => setmobile(event.target.value)}
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
            <Link to="/user/register">Don't have an account? Register</Link>
            <Link to="#">Forgot Password</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Userlgin;
