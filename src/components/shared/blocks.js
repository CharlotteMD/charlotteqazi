import React from "react";

export const Experience = ({ role }) => (
  <li className="blockItem">
    <h3>
      <span className="emoji" role="img">
        {role.emoji}
      </span>
    </h3>
    <h3>{role.role}</h3>
    <h4>{role.date}</h4>
    <p>
      <span>Key skills: </span>
      {role.skills}
    </p>
    {role.info && (
      <a
        href={role.info}
        alt="more information"
        target="_blank"
        className="sideNote"
      >
        Click for more information
      </a>
    )}
  </li>
);

export const MyProjects = ({ project }) => (
  <li className="blockItem">
    <img src={project.image} alt={project.title} />
    <h3>{project.title}</h3>
    <a href={project.link} alt={project.title} className="sideNote">
      See project
    </a>
    <p>{project.info}</p>
  </li>
);

export const TechSkills = ({ info, devicon }) => (
  <div className="blockItem">
    <p className="skillsInfo">{info}</p>
    <ul>
      <li className="devicons">
        {devicon.map(devicon => (
          <i class={devicon} />
        ))}
      </li>
    </ul>
  </div>
);

export const NavMenu = ({ item }) => (
  <li>
    <a href={item.link} alt={item.title}>
      {item.title}
    </a>
  </li>
);
