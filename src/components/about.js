import React from "react";

import "../css/style.css";

function About() {
  const items = [
    {
      emoji: "👩🏻‍🎓",
      role:
        "First class degree in Classics from Royal Holloway, University of London",
      date: "July 2014",
      skills: "problem-solving, logic, communication, time-management"
    },
    {
      emoji: "🌇",
      role: "Internship in Event Management, Shanghai, China",
      date: "July - September 2014",
      skills:
        "working within a multi-disciplinary team, experience working in Asia Pacific (China, Hong Kong, Singapore), creative thinking"
    },
    {
      emoji: "📞",
      role: "Worked in hospitality recruitment for Madison Mayfair, London",
      date: "December 2014 - June 2016",
      skills: "project-management, sales, negotiation, networking"
    },
    {
      emoji: "👩🏻‍⚖️",
      role:
        "General Manager of The Student Lawyer, a legal graduate recruitment startup",
      date: "June 2016 - November 2017",
      skills:
        "management, digital marketing(SEO, social media, e-marketing), initiative, creative problem-solving, strategy"
    },
    {
      emoji: "👩🏻‍💻",
      role: "Studied Web Development at General Assembly",
      date: "November 2017 - April 2018",
      skills:
        "in addition to technical skills, agile working, daily standups, teamwork, networking"
    },
    {
      emoji: "🏙",
      role: "Software Engineer building startups at BCG Digital Ventures",
      date: "June 2018 - present",
      skills:
        "in addition to technical skills, agile working, daily standups, teamwork, networking"
    }
  ];

  const Experience = ({ item }) => (
    <li>
      <h3>
        <span role="img">{item.emoji}</span>
      </h3>
      <h3>{item.role}</h3>
      <h4>{item.date}</h4>
      <p>
        <span>Key skills: </span>
        {item.skills}
      </p>
    </li>
  );

  return (
    <div className="about">
      <h2>About</h2>
      <div className="careerJourney">
        <ul>
          {items.map(item => (
            <Experience item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default About;
