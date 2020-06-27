import React from "react";

import { MyProjects } from "./shared/blocks.js";

import whodunit from "../images/whodunit.png";
import guestbook from "../images/guestbook.png";
import getaroom from "../images/getaroom.png";
import appres from "../images/appres.png";
import alexa from "../images/alexa.png";
import sun from "../images/sun.png";
import beach from "../images/beach.png";
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
      link: "https://github.com/CharlotteMD/wdi-first-project",
      tech: ['HTML', 'CSS', 'JavaScript']
    },
    {
      title: "Guestbook",
      image: guestbook,
      link: "https://github.com/CharlotteMD/wdi-second-project",
      tech: ['HTML', 'CSS', 'JavaScript', 'Express', 'MongoDB']
    },
    {
      title: "Apprés",
      image: appres,
      link: "https://github.com/CharlotteMD/wdi-group-project",
      tech: ['HTML', 'CSS', 'JavaScript', 'Express', 'TDD', 'Angular', 'MongoDB', 'Mocha', 'jsonWebToken']
      
    },
    {
      title: "Get A Room",
      image: getaroom,
      link: "https://github.com/CharlotteMD/wdi-fourth-project",
      tech: ['HTML', 'CSS', 'JavaScript', 'Express', 'React', 'Axios', 'jsonWebToken', 'MongoDB', 'Mocha', 'Webpack' ]
    },
    {
      title: "Alexa Skills",
      image: alexa,
      link: "https://github.com/CharlotteMD/alexa-skills",
      tech: ['Alexa SDK', 'node.JS' ]
    },
    {
      title: "To Do list",
      image: amplify,
      link: "https://github.com/CharlotteMD/Ultimate-To-Do-App",
      tech: ['AWS Amplify', 'React', 'Styled Components', 'eslint' ]
    },
    {
      title: "Three.js",
      image: threejs,
      link: "https://github.com/CharlotteMD/3js",
      tech: ['threeJS', 'JavaScript']
    },
    {
      title: "Holiday Packing App (WIP)",
      image: sun,
      link: "https://github.com/CharlotteMD/packing-list-app",
      tech: ['AWS Amplify', 'React', 'Styled Components', 'Axios', 'Babel', 'Storybook', 'eslint', 'firebase' ]
    },
    {
      title: "Advent Calendar",
      image: advent,
      link: "https://github.com/CharlotteMD/advent-calendar",
      tech: ['React']
    },
    {
      title: "Beach Time App",
      image: beach,
      link: "https://github.com/CharlotteMD/beach-app",
      tech: ['Babel', 'eslint', 'firebase', 'prettier', 'webpack', 'React']
    },
    {
      title: "My original professional portfolio",
      image: portfolio,
      link: "https://github.com/CharlotteMD/CharlotteMD.github.io",
      tech: ['HTML', 'CSS', 'JavaScript']
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
