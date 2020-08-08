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
import signature from "../images/signature.png";
import recruitment from "../images/recruitment.png";
import charlottemd from "../images/charlottemd.png";
import camera from "../images/camera.png";

import "../css/style.css";

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
    tech: ['HTML', 'CSS', 'JavaScript', 'Express', 'Mocha', 'Angular', 'MongoDB', 'Mocha', 'jsonWebToken']
    
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
  },
  {
    title: "CharlotteMDavies.co.uk",
    image: charlottemd,
    link: "https://www.charlottemdavies.co.uk",
    tech: ['HTML', 'CSS', 'JavaScript', 'React']
  },
  {
    title: "Wedding Photographs app",
    image: camera,
    link: "https://github.com/CharlotteMD/jav-char-2.0",
    tech: ['HTML', 'CSS', 'JavaScript', 'React', 'AWS Amplify']
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
    image: recruitment,
    link: "https://workingatbcgdv.london/engineering/",
    tech: ['React', 'JavaScript', 'CSS', 'Styled Components', 'Gatsby', 'Netlify']
  },
  {
    title: "BCG Global Email Signature Generator - currently unavailable externally, (click to view prototype)",
    image: signature,
    link: "https://email-signature-creator.firebaseapp.com/",
    tech: ['React', 'JavaScript', 'CSS']
  }
];

const techSkills = ['HTML', 'CSS', 'JavaScript', 'Express', 'MongoDB',  'Mocha', 'Angular', 'jsonWebToken', 'React', 'Axios', 'Webpack', 'Alexa SDK', 'node.JS', 'AWS Amplify', 'React', 'Styled Components', 'eslint', 'threeJS', 'Babel', 'Storybook', 'eslint', 'firebase', 'Babel',  'prettier', 'Cuttlebelle', 'TypeScript', 'Gatsby', 'Netlify'];

function Projects() {

  const [techTags, setTechTags] = useState('all');

  function filterSkills(filterType) {
    setTechTags(filterType);
    const dropdown = document.querySelector(".dropdown-content");
    dropdown.classList.toggle("isopen");
  }

  function handleDropdown() {
    const dropdown = document.querySelector(".dropdown-content");
    dropdown.classList.toggle("isopen");
  }

  return (
    <div className="Projects">
      <h2 className="pageTitle">Projects</h2>

      <div class="dropdown">
        <button class="dropbtn" aria-label="filter by skill" onClick={()=>handleDropdown()}>Filter by skill</button>
        <div class="dropdown-content">
          <button className='filterButton' aria-label="show all skills" onClick={() => filterSkills('all')}>
            All
          </button>
          {techSkills.map(techSkills => (
            <button className='filterButton' aria-label={techSkills} onClick={() => filterSkills(`${techSkills}`)}>
              {techSkills}
            </button>
          ))}
        </div>
      </div>

      <h3 className="subtitle">Side Projects</h3>

      { techTags === 'all' && (
        <ul className="blockContainer">
          {projects.map(projects => (
            <MyProjects project={projects} />
          ))}
        </ul>
      )}

      <ul className="blockContainer">
        {projects.filter(projects => projects.tech.includes(`${techTags}`)).map(filteredTech => (
          <MyProjects project={filteredTech} />
        ))}
      </ul>

        <h3 className="subtitle">Professional Projects</h3>

        { techTags === 'all' && (
          <ul className="blockContainer">
            {professionalProjects.map(projects => (
              <MyProjects project={projects} />
            ))}
          </ul>
        )}

        <ul className="blockContainer">
          {professionalProjects.filter(professionalProjects => professionalProjects.tech.includes(`${techTags}`)).map(filteredTech => (
            <MyProjects project={filteredTech} />
          ))}
        </ul>

    </div>
  );
}

export default Projects;
