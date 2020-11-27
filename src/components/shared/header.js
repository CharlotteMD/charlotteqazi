import React from "react";

import { NavMenu } from "./blocks.js";
import "../../css/header.css";

function Header() {
  const items = [
    { title: "CV", link: "/career" },
    { title: "Projects", link: "/projects" },
    { title: "Blogs", link: "/blogs" },
    { title: "About Me", link: "/" }
  ];

  function handleBurger() {
    const burgernav = document.querySelector(".burger-nav");
    const navmenu = document.querySelector(".nav-menu");
    burgernav.classList.toggle("isopen");
    navmenu.classList.toggle("isopen");
  }

  return (
    <header className="navbar">
      <div className="navTitle">
        <a href="/" aria-label="Charlotte Qazi - Software Engineer">
          <h1>Charlotte Qazi</h1>
          <h2>Software Engineer</h2>
        </a>
      </div>
      <button className="burger-nav" id="burger" aria-label="mobile navigation" onClick={handleBurger}>
        <span />
        <span />
        <span />
      </button>

      <ul className="nav-menu">
        {items.map(items => (
          <NavMenu item={items} />
        ))}
      </ul>
    </header>
  );
}

export default Header;
