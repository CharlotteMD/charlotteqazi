import React from "react";
import "../../css/header.css";

import { FooterLinks } from "./blocks.js";

import email from "../../images/email.png";
import linkedin from "../../images/link.png";
import github from "../../images/git.png";
import medium from "../../images/medium.png";

function Footer() {
  const items = [
    {
      title: "Email",
      link: "mailto:charlotteqazi@gmail.com",
      image: email
    },
    {
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/charlottemdavies/",
      image: linkedin
    },
    {
      title: "GitHub",
      link: "https://github.com/CharlotteMD",
      image: github
    },
    {
      title: "Medium",
      link: "https://medium.com/@charlotte.davies",
      image: medium
    }
  ];
  return (
    <footer>
      <div className="contact">
        {items.map(items => (
          <FooterLinks item={items} />
        ))}
      </div>
    </footer>
  );
}

export default Footer;
