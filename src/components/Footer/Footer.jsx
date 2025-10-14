import React from "react";
import logo from "../../assets/logo2.png";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-columns">
        <div>
          <img src={logo} alt="NexGenVote Logo" />
          <p>Modern E-Voting made simple, secure, and accessible.</p>
          <p>Email: support@nexgenvote.com</p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4>Legal</h4>
          <ul>
            <li>
              <Link to="/privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/terms">Terms of Use</Link>
            </li>
            <li>
              <Link to="/security">Security</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 NexGenVote. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
