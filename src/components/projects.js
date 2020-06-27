import React from "react";

import { MyProjects } from "./shared/blocks.js";

import whodunit from "../images/whodunit.png";
import guestbook from "../images/guestbook.png";
import getaroom from "../images/getaroom.png";
import appres from "../images/appres.png";
import alexa from "../images/alexa.png";
import sun from "../images/sun.png";
import amplify from "../images/amplify.png";
import portfolio from "../images/portfolio.jpg";
import threejs from "../images/threejs.png";
import advent from "../images/advent.png";
import jaimy from "../images/jaimy.png";
import axora from "../images/axora.png";
import beema from "../images/beema.png";

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
      link: "https://github.com/CharlotteMD/alexa-skills"
    },
    {
      title: "AWS Amplify",
      image: amplify,
      link: "https://github.com/CharlotteMD/Ultimate-To-Do-App"
    },
    {
      title: "Three.js",
      image: threejs,
      link: "https://github.com/CharlotteMD/3js"
    },
    {
      title: "Holiday Packing App (WIP)",
      image: sun,
      link: "https://github.com/CharlotteMD/packing-list-app"
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

  const professionalProjects = [
    {
      title: "Beema",
      image: beema,
      link: "https://www.beema.ae/"
    },
    {
      title: "Axora",
      image: axora,
      link: "https://www.axora.com/"
    },
    {
      title: "Jaimy",
      image: jaimy,
      link: "https://jaimy.be/en/"
    }
  ];

  return (
    <div className="Projects">
      <h2 className="pageTitle">Projects</h2>
      <h3 className="subtitle">Professional Projects</h3>
      <ul className="blockContainer">
        {professionalProjects.map(projects => (
          <MyProjects project={projects} />
        ))}
      </ul>
      <h3 className="subtitle">Side Projects</h3>
      <ul className="blockContainer">
        {projects.map(projects => (
          <MyProjects project={projects} />
        ))}
      </ul>
    </div>
  );
}

export default Projects;
