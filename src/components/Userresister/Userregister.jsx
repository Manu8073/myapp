import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./Userregister.css";

function Userregister() {
  const [mobile, setmobile] = useState("");
  const [password, setpassword] = useState("");
  const [name, setname] = useState("");
  const navigate = useNavigate();

  const handle = (e) => {
    e.preventDefault();
    console.log(mobile, password, name);
    setmobile("");
    setpassword("");
    setname("");
    navigate("/user/login");
  };

  return (
    <div className="logincontainer">
      <div className="box">
        <form onSubmit={handle}>
          <h1>Voter register</h1>

          <div className="inputgroup">
            <label htmlFor="Name"> Full Name </label>
            <input
              type="text"
              placeholder="Full name"
              value={name}
              required
              onChange={(event) => setname(event.target.value)}
            />
          </div>

          <div className="inputgroup">
            <label htmlFor="mobile">Mobile number</label>
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
          <button type="submit">Register</button>
          <div className="footer">
            <Link to="/user/login">If you have account? Login</Link>
            <Link to="#">Forgot Password</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Userregister;
