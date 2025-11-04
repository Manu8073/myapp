import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Userregister.css";

function Userregister() {
  const [mobile, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handle = (e) => {
    e.preventDefault();
    console.log(mobile, password);
  };

  return (
    <div className="logincontainer">
      <div className="box">
        <form action="/user/login" onSubmit={handle}>
          <h1>Voter register</h1>

          <div className="inputgroup">
            <label htmlFor="Name"> Full Name </label>
            <input
              type="text"
              placeholder="Full name"
              value={mobile}
              onChange={(event) => setemail(event.target.value)}
            />
          </div>

          <div className="inputgroup">
            <label htmlFor="mobile">Mobile number</label>
            <input
              type="tel"
              placeholder="mobile number"
              value={mobile}
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
          <button type="submit">Register</button>
          <div className="footer">
            <Link to="/user/register">If your a voter? Register</Link>
            <Link to="#">Forgot Password</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Userregister;
