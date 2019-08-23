import React from "react";

import { MyProjects } from "./shared/blocks.js";

import whodunit from "../images/whodunit.png";
import guestbook from "../images/guestbook.png";
import getaroom from "../images/getaroom.png";
import appres from "../images/appres.png";
import alexa from "../images/alexa.png";
import portfolio from "../images/portfolio.jpg";
import threejs from "../images/threejs.png";
import advent from "../images/advent.png";

import "../css/style.css";

function Projects() {
  const projects = [
    {
      title: "Whodunit",
      image: whodunit,
      link: "https://github.com/CharlotteMD/wdi-first-project"
    },
    {
      title: "Guestbook",
      image: guestbook,
      link: "https://github.com/CharlotteMD/wdi-second-project"
    },
    {
      title: "Apprés",
      image: appres,
      link: "https://github.com/CharlotteMD/wdi-group-project"
    },
    {
      title: "Get A Room",
      image: getaroom,
      link: "https://github.com/CharlotteMD/wdi-fourth-project"
    },
    {
      title: "Alexa Skills",
      image: alexa,
      link: "https://github.com/CharlotteMD/"
    },
    {
      title: "Three.js",
      image: threejs,
      link: "https://github.com/CharlotteMD/"
    },
    {
      title: "Advent Calendar",
      image: advent,
      link: "https://github.com/CharlotteMD/advent-calendar"
    },
    {
      title: "My original professional portfolio",
      image: portfolio,
      link: "https://github.com/CharlotteMD/"
    }
  ];

  return (
    <div className="Projects">
      <h2 className="pageTitle">Projects</h2>
      <ul className="blockContainer">
        {projects.map(projects => (
          <MyProjects project={projects} />
        ))}
      </ul>
      <p>
        Please feel free to browse{" "}
        <a href="https://github.com/CharlotteMD/" alt="GitHub">
          my GitHub.
        </a>
      </p>
      <p>
        For examples of professional projects, please{" "}
        <a href="mailto:charlottemarydavies@gmail.com" alt="GitHub">
          get in touch.
        </a>
      </p>
    </div>
  );
}

export default Projects;
