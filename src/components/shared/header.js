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
      <div className="navTitle">
        <a href="/" alt="Charlotte Davies - Software Engineer">
          <h1>Charlotte Davies</h1>
          <h2>Software Engineer</h2>
        </a>
      </div>
      <button className="burger-nav" id="burger" onClick={handleBurger}>
        <span />
        <span />
        <span />
      </button>

      <ul className="nav-menu">
        <li>
          <a href="/career" alt="career">
            Career
          </a>
        </li>
        <li>
          <a href="/projects" alt="project">
            Projects
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
