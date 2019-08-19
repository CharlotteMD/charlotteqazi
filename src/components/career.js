import React from "react";

import { Experience, MyProjects, TechSkills } from "./shared/blocks.js";

import "../css/style.css";

function Career() {
  const roles = [
    {
      emoji: "🏙",
      role: "Software Engineer building startups at BCG Digital Ventures",
      date: "June 2018 - present",
      info: "https://bcgdv.com/",
      skills:
        "in addition to technical skills, working in a multi-disciplinary team, working to tight deadlines, experience working in the Middle East"
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
        "management, digital marketing (SEO, social media, e-marketing, marketing analytics), creative problem-solving, strategy"
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
        "working within a multi-disciplinary team, experience working in Asia Pacific (China, Hong Kong, Singapore), creative thinking, business development"
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
      title: "Code First Girls",
      image: "",
      link: "https://github.com/CharlotteMD/wdi-first-project",
      info:
        "Whodunit remains one of my proudest project to date! I built it after just 2 weeks of learning JavaScript at General Assembly. I was so proud by how much I could achieve having learnt only a small amount of code."
    },
    {
      title: "Blogging",
      image: "",
      link: "https://github.com/CharlotteMD/",
      info:
        "I have learnt so much in the past year. For reference, here is my code from 2018."
    }
  ];

  const skills = [
    {
      info: "Most often I build my projects in React.",
      devicon: ["devicon-react-original-wordmark"]
    },
    {
      info: "At work, sometimes we also use Typescript, PhotoShop and Webpack.",
      devicon: [
        "devicon-typescript-plain",
        "devicon-photoshop-line",
        "devicon-webpack-plain-wordmark"
      ]
    },
    {
      info:
        "To stay organised, we use Trello, Confluence, Slack, GitHub and GitLab.",
      devicon: [
        "devicon-trello-plain-wordmark",
        "devicon-confluence-plain-wordmark",
        "devicon-slack-plain-wordmark",
        "devicon-github-plain-wordmark",
        "devicon-gitlab-plain-wordmark"
      ]
    },
    {
      info:
        "For simpler projects, I like to use simple JavaScript and some fancy CSS.",
      devicon: [
        "devicon-html5-plain-wordmark",
        "devicon-javascript-plain",
        "devicon-css3-plain-wordmark"
      ]
    },
    {
      info:
        "I tend to host my work in Google firebase, in a simple S3 Bucket in AWS or Heroku.",
      devicon: [
        "devicon-amazonwebservices-plain-wordmark",
        "devicon-google-plain-wordmark",
        "devicon-heroku-original-wordmark"
      ]
    },
    {
      info:
        "Recently I have been building Alexa skills, using Node.js, the Alexa Skills Kit and Lambda Functions.",
      devicon: [
        "devicon-nodejs-plain-wordmark",
        "devicon-amazonwebservices-plain-wordmark"
      ]
    },
    {
      info: "Whilst studying at General Assembly, I also learnt to use:",
      devicon: [
        "devicon-angularjs-plain-wordmark",
        "devicon-jquery-plain-wordmark",
        "devicon-bootstrap-plain-wordmark",
        "devicon-sass-original",
        "devicon-mongodb-plain-wordmark",
        "devicon-express-original-wordmark",
        "devicon-ruby-plain-wordmark",
        "devicon-rails-plain-wordmark",
        "devicon-postgresql-plain-wordmark",
        "devicon-mocha-plain",
        "devicon-gulp-plain",
        "devicon-bower-line-wordmark",
        "devicon-babel-plain"
      ]
    }
  ];

  return (
    <div className="Career">
      <h2 className="pageTitle">My Career To Date</h2>
      <div className="careerJourney">
        <div className="blockItem">
          <h3>Technical Skills</h3>

          {skills.map(skills => (
            <TechSkills info={skills.info} devicon={skills.devicon} />
          ))}
        </div>

        <ul className="blockContainer">
          {roles.map(roles => (
            <Experience role={roles} />
          ))}
        </ul>
        <h2 className="pageTitle">Other Projects</h2>
        <ul className="blockContainer">
          {projects.map(projects => (
            <MyProjects project={projects} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Career;
