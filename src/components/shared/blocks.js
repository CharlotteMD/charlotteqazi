import React from "react";

export const Experience = ({ role }) => (
  <li className="blockItem">
    <h3>
      <span className="emoji" role="img">
        {role.emoji}
      </span>
    </h3>
    {role.info && (
      <a href={role.info} alt="more information" target="_blank">
        <h3>{role.role}</h3>
      </a>
    )}
    {!role.info && <h3>{role.role}</h3>}
    <h4>{role.date}</h4>
    <p>
      <span>Key skills: </span>
      {role.skills}
    </p>
  </li>
);

export const OtherRoles = ({ project }) => (
  <li className="blockItem">
    <img src={project.image} alt={project.title} className={project.class} />
    {project.link && (
      <a href={project.link} alt={project.title}>
        <h3>{project.title}</h3>
      </a>
    )}
    {!project.link && (
      <h3>{project.title}</h3>
    )}

    <p>{project.info}</p>
  </li>
);

export const MyProjects = ({ project }) => (
  <li className="blockItem projects">
    <h3>{project.title}</h3>
    <a href={project.link} alt={project.title} target="_blank">
      <img src={project.image} alt={project.title} />
    </a>
  </li>
);

export const MyBlogs = ({ blog, speak }) => (
  <li className={`blockItem ${blog.tags}`}>
    <a href={blog.link} alt={blog.title} target="_blank">
      <h3>{blog.title}</h3>
      <p>{speak ? `Conference: ${blog.publication}` : `Published in: ${blog.publication}`}</p>
    </a>
  </li>
);

export const NavMenu = ({ item }) => (
  <li>
    <a href={item.link}>
      {item.title}
    </a>
  </li>
);

export const FooterLinks = ({ item }) => (
  <a href={item.link} target="_blank" alt={item.title}>
    <img src={item.image} alt={item.title} />
  </a>
);
