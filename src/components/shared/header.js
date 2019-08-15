import React from "react";
import "../../css/header.css";

function Header() {
  function handleBurger() {
    const nav = document.querySelector(".burger-nav");
    nav.classList.toggle("isopen");
  }

  return (
    <header className="navbar">
      <h1>Charlotte</h1>
      <ul className="nav-menu">
        <li>
          <a href="/" alt="intro">
            Home
          </a>
        </li>
        <li>
          <a href="/intro" alt="intro">
            Intro
          </a>
        </li>
        <li>
          <a href="/about" alt="about">
            About
          </a>
        </li>
      </ul>
      <button className="burger-nav" id="burger" onClick={handleBurger}>
        <span />
        <span />
        <span />
      </button>
    </header>
  );
}

export default Header;
