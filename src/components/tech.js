import React from "react";

import { TechSkills } from "./shared/blocks.js";

import alexa from "../images/alexa.png";
import unity from "../images/unity.png";
import three from "../images/three.png";
import google from "../images/google.png";
import graphql from "../images/graph-ql.png";
import styled from "../images/styled-components.png";

import "../css/style.css";

function Skills() {

  return (
    <div className="skills">
        <p>
            
        
        Most often I build my projects in React (sometimes with Typescript too).
        For simpler projects, I like to use JavaScript and CSS (sometimes with Styled Components). I tend to host my work in Google Firebase, AWS or Heroku. In my free time, I'm experimenting with Graph QL.
        I love learning how to build a variety of tech. Recently I have been building Alexa skills, using Node.js, the Alexa Skills Kit and Lambda Functions. It's also been great to be able to play around with Three.js and Unity.
        </p>
     <ul>
         <li>Favourite Technologies</li>
         <li>Technologies I use most often for work</li>
         <li>Technologies I am currently experimenting with in my free time</li>
         <li></li>
         <li></li>
     </ul>
    </div>
  );
}

export default Skills;
