import React from "react";

import "../css/style.css";
import "../css/career.css";

function Career() {
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
      info: "http://www.rivieraevents.com",
      skills:
        "working within a multi-disciplinary team, experience working in Asia Pacific (China, Hong Kong, Singapore), creative thinking, business development"
    },
    {
      emoji: "📞",
      role: "Worked in hospitality recruitment for Madison Mayfair, London",
      date: "December 2014 - June 2016",
      info: "https://madisonmayfair.com/",
      skills: "project-management, sales, negotiation, networking"
    },
    {
      emoji: "👩🏻‍⚖️",
      role:
        "General Manager of The Student Lawyer, a legal graduate recruitment startup",
      date: "June 2016 - November 2017",
      info: "https://thestudentlawyer.com/",
      skills:
        "management, digital marketing (SEO, social media, e-marketing, marketing analytics), creative problem-solving, strategy"
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
      emoji: "🏙",
      role: "Software Engineer building startups at BCG Digital Ventures",
      date: "June 2018 - present",
      info: "https://bcgdv.com/",
      skills:
        "in addition to technical skills, working in a multi-disciplinary team, working to tight deadlines, experience working in the Middle East"
    }
  ];

  const Experience = ({ item }) => (
    <li>
      <h3>
        <span className="emoji" role="img">
          {item.emoji}
        </span>
      </h3>
      <h3>{item.role}</h3>
      <h4>{item.date}</h4>
      {item.info && (
        <a
          href={item.info}
          alt="more information"
          target="_blank"
          className="sideNote"
        >
          Click for more information
        </a>
      )}
      <p>
        <span>Key skills: </span>
        {item.skills}
      </p>
    </li>
  );

  return (
    <div className="Career">
      <h2 className="pageTitle">Career</h2>
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

export default Career;
