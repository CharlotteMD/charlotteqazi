import React from "react";

import { TechSkills } from "./shared/blocks.js";

import "../css/style.css";

function Skills() {
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
    <div className="skills">
      <h1>Technical Skills</h1>
      <div className="careerJourney">
        <div className="techSkills">
          <h3 className="subtitle">Technical Skills</h3>
          <div className="blockContainer">
            {skills.map(skills => (
              <TechSkills info={skills.info} devicon={skills.devicon} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
