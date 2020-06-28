import React, {useState} from "react";

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

  const [techTags, setTechTags] = useState('all');

  function filterAll() {
    setTechTags('all');
  }

  function filterJS() {
    setTechTags('JavaScript');
  }

  function filterReact() {
    setTechTags('React');
  }

  function filterHTML() {
    setTechTags('HTML');
  }

  function filterCSS() {
    setTechTags('CSS');
  }

  function filterExpress() {
    setTechTags('Express');
  }

  function filterMongoDB() {
    setTechTags('MongoDB');
  }


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
      link: "https://www.beema.ae/",
      tech: ['React', 'Storybook', 'Cuttlebelle', 'JavaScript']
    },
    {
      title: "Axora",
      image: axora,
      link: "https://www.axora.com/",
      tech: ['React', 'TypeScript', 'Styled Components']
    },
    {
      title: "Jaimy",
      image: jaimy,
      link: "https://jaimy.be/en/",
      tech: ['React', 'JavaScript', 'CSS']
    },
    {
      title: "BCG DV London Engineering Recruitment Microsite",
      image: jaimy,
      link: "https://jaimy.be/en/",
      tech: ['React', 'JavaScript', 'CSS', 'Styled Components', 'Gatsby', 'Netlify']
    },
    {
      title: "BCG Global Email Signature Generator",
      image: jaimy,
      link: "https://jaimy.be/en/",
      tech: ['React', 'JavaScript', 'CSS']
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


      <button onClick={filterAll}>All</button>
      <button onClick={filterJS}>JavaScript</button>
      <button onClick={filterReact}>React</button>
      <button onClick={filterHTML}>HTML</button>
      <button onClick={filterCSS}>CSS</button>
      <button onClick={filterExpress}>Express</button>
      <button onClick={filterMongoDB}>MongoDB</button>

      { techTags === 'all' && (
        <ul className="blockContainer">
          {projects.map(projects => (
            <MyProjects project={projects} />
          ))}
        </ul>
      )}

      { techTags === 'JavaScript' && (
        <ul className="blockContainer">
          {projects.filter(projects => projects.tech.includes('JavaScript')).map(filteredTech => (
              <MyProjects project={filteredTech} />
            ))}
        </ul>
      )}

      { techTags === 'React' && (
        <ul className="blockContainer">
          {projects.filter(projects => projects.tech.includes('React')).map(filteredTech => (
              <MyProjects project={filteredTech} />
            ))}
        </ul>
      )}

      { techTags === 'HTML' && (
        <ul className="blockContainer">
          {projects.filter(projects => projects.tech.includes('HTML')).map(filteredTech => (
              <MyProjects project={filteredTech} />
            ))}
        </ul>
      )}

      { techTags === 'CSS' && (
        <ul className="blockContainer">
          {projects.filter(projects => projects.tech.includes('CSS')).map(filteredTech => (
              <MyProjects project={filteredTech} />
            ))}
        </ul>
      )}

      { techTags === 'Express' && (
        <ul className="blockContainer">
          {projects.filter(projects => projects.tech.includes('Express')).map(filteredTech => (
              <MyProjects project={filteredTech} />
            ))}
        </ul>
      )}

      { techTags === 'MongoDB' && (
        <ul className="blockContainer">
          {projects.filter(projects => projects.tech.includes('MongoDB')).map(filteredTech => (
              <MyProjects project={filteredTech} />
            ))}
        </ul>
      )}

    </div>
  );
}

export default Projects;
