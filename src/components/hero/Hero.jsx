import React from "react";
import heroImg from "../../assets/hero1.png";
import "./Hero.css";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  const handlelearn = () => {
    navigate("/learnmore");
  };

  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Empowering Every Vote, Every Time.</h1>
        <p>Modern E-Voting made simple, secure, and accessible for everyone.</p>
        <button className="hero-btn" onClick={handlelearn}>
          Learn More
        </button>
      </div>

      <div className="hero-image">
        <img src={heroImg} alt="hero illustration" />
      </div>
    </section>
  );
}

export default Hero;
