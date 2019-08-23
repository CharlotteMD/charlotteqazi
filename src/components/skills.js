import React from "react";

import { TechSkills } from "./shared/blocks.js";

import alexa from "../images/alexa.png";
import unity from "../images/unity.png";
import three from "../images/three.png";
import google from "../images/google.png";

import "../css/style.css";

function Skills() {
  const skills = [
    {
      info: "Most often I build my projects in React.",
      devicon: ["devicon-react-original-wordmark colored"]
    },
    {
      info:
        "For simpler projects, I like to use JavaScript and CSS. I tend to host my work in Google Firebase, AWS or Heroku.",
      devicon: [
        "devicon-html5-plain-wordmark colored",
        "devicon-javascript-plain colored",
        "devicon-css3-plain-wordmark colored",
        "devicon-amazonwebservices-plain-wordmark colored",
        "devicon-google-plain-wordmark colored",
        "devicon-heroku-original-wordmark colored"
      ]
    },
    {
      info:
        "I love learning how to build a variety of tech. Recently I have been building Alexa skills, using Node.js, the Alexa Skills Kit and Lambda Functions. It's also been great to be able to play around with Three.js and Unity.",
      devicon: [
        "devicon-nodejs-plain-wordmark colored",
        "devicon-amazonwebservices-plain-wordmark colored"
        // "devicon-google-plain-wordmark colored"
      ],
      image: [
        {
          src: alexa,
          title: "Alexa",
          class: "alexa"
        },
        {
          src: google,
          title: "Google Assistant",
          class: "google"
        },
        {
          src: unity,
          title: "Unity",
          class: "unity"
        },
        {
          src: three,
          title: "Three.js",
          class: "threejs"
        }
      ]
    },
    {
      info: "Whilst studying at General Assembly, I also learnt to use:",
      devicon: [
        "devicon-angularjs-plain-wordmark colored",
        "devicon-jquery-plain-wordmark colored",
        "devicon-bootstrap-plain-wordmark colored",
        "devicon-sass-original colored",
        "devicon-mongodb-plain-wordmark colored",
        "devicon-express-original-wordmark colored",
        "devicon-ruby-plain-wordmark colored",
        "devicon-rails-plain-wordmark colored",
        "devicon-postgresql-plain-wordmark colored",
        "devicon-mocha-plain colored",
        "devicon-gulp-plain colored",
        "devicon-bower-line-wordmark colored",
        "devicon-babel-plain colored"
      ]
    }
  ];
  return (
    <div className="skills">
      <div className="careerJourney">
        <div className="techSkills">
          <h2 className="pageTitle">Technical Skills</h2>
          <div className="blockContainer">
            {skills.map(skills => (
              <TechSkills
                info={skills.info}
                devicon={skills.devicon}
                image={skills.image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
