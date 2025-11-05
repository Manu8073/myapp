import React from "react";
import { Link } from "react-router-dom";
import { FaVoteYea, FaShieldAlt, FaUsers, FaChartBar } from "react-icons/fa";
import "./LearnMore.css";

function LearnMore() {
  return (
    <div className="learn-container">
      <div className="learn-header text-center">
        <h1>NextGenVote</h1>
        <p className="text-muted">
          Revolutionizing elections through transparency, accessibility, and
          technology.
        </p>
      </div>

      <section className="learn-section">
        <h2>About the Project</h2>
        <p>
          The <strong>NextGenVote</strong> is a secure web-based platform that
          allows users to vote online using verified credentials. It aims to
          replace traditional voting with a digital process that is faster,
          safer, and more transparent. The system integrates authentication
          through Voter ID and optional biometric verification to ensure fair
          elections.
        </p>
      </section>

      <section className="learn-section">
        <h2>Key Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <FaShieldAlt className="icon" />
            <h4>Secure Verification</h4>
            <p>
              Two-step authentication ensures only authorized voters can cast
              their vote.
            </p>
          </div>
          <div className="feature-card">
            <FaVoteYea className="icon" />
            <h4>Instant Vote Casting</h4>
            <p>Vote quickly and efficiently from your device in real-time.</p>
          </div>
          <div className="feature-card">
            <FaUsers className="icon" />
            <h4>Voter-Friendly Interface</h4>
            <p>
              Simple and intuitive UI for easy navigation and accessibility.
            </p>
          </div>
          <div className="feature-card">
            <FaChartBar className="icon" />
            <h4>Transparent Results</h4>
            <p>
              Votes are securely recorded and counted with complete
              transparency.
            </p>
          </div>
        </div>
      </section>

      <div className="text-center mt-5">
        <Link to="/about" className="btn btn-primary px-4">
          Learn More About System
        </Link>
      </div>
    </div>
  );
}

export default LearnMore;
