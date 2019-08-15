import React from "react";
import "../../css/header.css";

function Header() {
  function handleBurger() {
    const burgernav = document.querySelector(".burger-nav");
    const navmenu = document.querySelector(".nav-menu");
    burgernav.classList.toggle("isopen");
    navmenu.classList.toggle("isopen");
  }

  return (
    <header className="navbar">
      <h1>Charlotte</h1>
      <button className="burger-nav" id="burger" onClick={handleBurger}>
        <span />
        <span />
        <span />
      </button>

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
    </header>
  );
}

export default Header;
