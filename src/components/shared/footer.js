import React from "react";
import "../../css/header.css";

import email from "../../images/email.png";
import linkedin from "../../images/link.png";
import github from "../../images/git.png";
import medium from "../../images/medium.png";

function Footer() {
  return (
    <footer>
      <div class="contact">
        <a href="mailto:charlottemarydavies@gmail.com">
          <img src={email} alt="Email" />
        </a>

        <a
          href="https://www.linkedin.com/in/charlottemdavies/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedin} alt="LinkedIn" />
        </a>

        <a
          href="https://github.com/CharlotteMD"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} alt="GitHub" />
        </a>

        <a
          href="https://medium.com/@charlotte.davies"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={medium} alt="Medium" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
