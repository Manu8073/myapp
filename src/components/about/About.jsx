import React from "react";
import "./About.css";

import {
  FaLock,
  FaVoteYea,
  FaChartBar,
  FaClock,
  FaDatabase,
} from "react-icons/fa";

function About() {
  return (
    <>
      <div className="about-container">
        <h1 className="about-title">About NextGenVote</h1>

        <section className="about-section">
          <h2>Overview</h2>
          <p>
            The <strong>E-Voting Portal</strong> is a secure, web-based platform
            designed to modernize the election process and ensure transparency,
            accuracy, and accessibility. It enables eligible voters to cast
            their votes online while maintaining strict verification and data
            protection standards. This system is designed to support{" "}
            <strong>government elections</strong>, where reliability and
            fairness are crucial.
          </p>
        </section>

        <section className="about-section">
          <h2>Objectives</h2>
          <ul>
            <li>
              Digitize the traditional voting process for efficiency and
              accessibility.
            </li>
            <li>
              Ensure voter authenticity through secure login and verification.
            </li>
            <li>
              Eliminate duplicate or proxy votes via one-vote-per-user
              enforcement.
            </li>
            <li>
              Automate result counting and reporting to reduce human error.
            </li>
            <li>
              Enhance democratic participation through transparency and
              technology.
            </li>
          </ul>
        </section>

        <section className="about-section">
          <h2>Key Features</h2>
          <ul className="feature-list">
            <li>
              <FaLock /> Secure Login & Authentication
            </li>
            <li>
              <FaVoteYea /> Online Voting Interface
            </li>
            <li>
              <FaChartBar /> Real-Time Vote Counting
            </li>
            <li>
              <FaClock /> Time-Bound Polls
            </li>
            <li>
              <FaDatabase /> Tamper-Proof Data Storage
            </li>
          </ul>
        </section>

        <section className="about-section">
          <h2>Vision</h2>
          <p>
            The <strong>E-Voting Portal</strong> envisions a future where every
            citizen can vote freely, securely, and conveniently — reinforcing{" "}
            <strong>trust, transparency, and democratic empowerment</strong>
            through digital innovation.
          </p>
        </section>
      </div>
    </>
  );
}

export default About;
