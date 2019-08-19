import React from "react";
import "../css/style.css";

function Projects() {
  const items = [
    {
      title: "Whodunit",
      image: "",
      link: "https://github.com/CharlotteMD/wdi-first-project",
      info:
        "Whodunit remains one of my proudest project to date! I built it after just 2 weeks of learning JavaScript at General Assembly. I was so proud by how much I could achieve having learnt only a small amount of code."
    },
    {
      title: "Whodunit",
      image: "",
      link: "https://github.com/CharlotteMD/wdi-first-project",
      info:
        "Whodunit remains one of my proudest project to date! I built it after just 2 weeks of learning JavaScript at General Assembly. I was so proud by how much I could achieve having learnt only a small amount of code."
    }
  ];

  const MyProjects = ({ item }) => (
    <li className="blockItem">
      <img src={item.image} alt={item.title} />
      <h3>{item.title}</h3>
      <a href={item.link} alt={item.title} className="sideNote">
        See project
      </a>
      <p>{item.info}</p>
    </li>
  );
  return (
    <div className="Projects">
      <h1>Projects</h1>
      <ul className="blockContainer">
        {items.map(item => (
          <MyProjects item={item} />
        ))}
      </ul>
    </div>
  );
}

export default Projects;
