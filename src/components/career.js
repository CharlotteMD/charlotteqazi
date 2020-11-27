import React from "react";

import { Experience, OtherRoles } from "./shared/blocks.js";

import cfg from "../images/cfg.png";
import medium from "../images/medium.png";
import diversity from "../images/diversity.png";

import "../css/style.css";

function Career() {
  const roles = [
    {
      emoji: "🏙",
      role: "Software Engineer building startups at BCG Digital Ventures",
      date: "June 2018 - present",
      info: "https://bcgdv.com/",
      skills:
        "in addition to technical skills, working in a multi-disciplinary team, stakeholder management, project management, pitching and presenting, working to tight deadlines, experience working in the Middle East and the USA"
    },
    {
      emoji: "👩🏻‍💻",
      role: "Studied Web Development at General Assembly",
      date: "November 2017 - April 2018",
      info: "https://generalassemb.ly/",
      skills:
        "in addition to technical skills, agile working, daily standups, teamwork, networking"
    },
    {
      emoji: "👩🏻‍⚖️",
      role:
        "General Manager of The Student Lawyer, a legal graduate recruitment startup",
      date: "June 2016 - November 2017",
      info: "https://thestudentlawyer.com/",
      skills:
        "strategy, pitching, management, client relationship management, digital marketing (SEO, social media, e-marketing, marketing analytics), creative problem-solving"
    },
    {
      emoji: "📞",
      role: "Worked in hospitality recruitment for Madison Mayfair, London",
      date: "December 2014 - June 2016",
      info: "https://madisonmayfair.com/",
      skills: "project-management, sales, negotiation, networking"
    },
    {
      emoji: "🌇",
      role: "Internship in Event Management, Shanghai, China",
      date: "July - September 2014",
      info: "http://www.rivieraevents.com",
      skills:
        "working within a multi-disciplinary team, experience working in Asia Pacific, creative thinking, business development"
    },
    {
      emoji: "👩🏻‍🎓",
      role:
        "First class degree in Classics from Royal Holloway, University of London",
      date: "July 2014",
      skills: "problem-solving, logic, communication, time-management"
    }
  ];

  const projects = [
    {
      title: "Code First: Girls",
      image: cfg,
      class: "cfg",
      link: "https://www.codefirstgirls.org.uk/",
      info:
        "I am proud to run DV London's Code First: Girls programme. Code First: Girls is a non-profit that matches women with no previous coding experience with corporate partners whose staff teach them a 8 week coding course. I absolutely love watching the girls learn and get excited about tech."
    },
    {
      title: "Blogging",
      image: medium,
      class: "blogging",
      link: "https://medium.com/@charlotte.davies",
      info:
        "When I first graduated from General Assembly, many people asked me questions about changing my career. I wrote down those answers in my first post, which lead to more questions and more blogs."
    },
    {
      title: "Accessibility",
      image: diversity,
      class: "blogging",
      info:
        "I passionately believe that the internet should be accessible to everyone. I am working hard to learn more about how I can make what I build more accessible and have spoken on the topic recently at conferences."
    }
  ];

  return (
    <div className="Career">
      <h2 className="pageTitle">My Career To Date</h2>
      <div className="careerJourney">
        <h3 className="subtitle">Experience</h3>
        <ul className="blockContainer">
          {roles.map(roles => (
            <Experience role={roles} />
          ))}
        </ul>
        <h3 className="subtitle">Other Projects</h3>
        <ul className="blockContainer">
          {projects.map(projects => (
            <OtherRoles project={projects} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Career;
