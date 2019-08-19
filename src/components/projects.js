import React from "react";

import { MyProjects } from "./shared/blocks.js";

import "../css/style.css";

function Projects() {
  const projects = [
    {
      title: "Whodunit",
      image: "",
      link: "https://github.com/CharlotteMD/wdi-first-project",
      info:
        "Whodunit remains one of my proudest project to date! I built it after just 2 weeks of learning JavaScript at General Assembly. I was so proud by how much I could achieve having learnt only a small amount of code."
    },
    {
      title: "Alexa Skills",
      image: "",
      link: "https://github.com/CharlotteMD/",
      info:
        "I love building voice assistants. In doing so, I have improved my knowledge of Node.js, learnt how to write Lambda functions, and practised testing my code."
    },
    {
      title: "Three.js",
      image: "",
      link: "https://github.com/CharlotteMD/",
      info: ""
    },
    {
      title: "My original professional portfolio",
      image: "",
      link: "https://github.com/CharlotteMD/",
      info:
        "I have learnt so much in the past year. For reference, here is my code from 2018."
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
      <p>For my professional projects, please get in touch.</p>
    </div>
  );
}

export default Projects;
