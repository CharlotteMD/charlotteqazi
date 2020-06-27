import React from "react";

import { MyBlogs } from "./shared/blocks.js";


import "../css/style.css";

const myBlogs = [
    {
      title: "Where to start with coding",
      link: "https://github.com/CharlotteMD/wdi-first-project"
    },
    {
      title: "What NOT to do when learning to code",
      link: "https://github.com/CharlotteMD/wdi-second-project"
    },
    {
      title: "What it's like to do a coding bootcamp",
      link: "https://github.com/CharlotteMD/wdi-group-project"
    },
    {
      title: "Why you don't need to be good at Maths to code",
      link: "https://github.com/CharlotteMD/wdi-fourth-project"
    },
    {
      title: "How to prepare for a coding bootcamp",
      publication: 'Code Like a Girl',
      link: "https://code.likeagirl.io/how-to-prepare-for-a-coding-bootcamp-538da248933b"
    },
    {
      title: "Where can you work if you can code",
      publication: 'Code Like a Girl',
      link: "https://code.likeagirl.io/where-can-you-work-if-you-code-a642fced215b"
    },
    {
      title: "Keeping up with your Kolleagues",
      publication: 'Code Like a Girl',
      link: "https://code.likeagirl.io/keeping-up-with-your-kolleagues-315c79022e2c"
    },
    {
      title: "A solution to copy to clipboard",
      link: "https://github.com/CharlotteMD/"
    },
    {
      title: "How to fix bugs",
      link: "https://github.com/CharlotteMD/"
    },
    {
      title: "How to get paid to code",
      link: "https://github.com/CharlotteMD/"
    },
    {
      title: "Where to start with Alexa Skills development series (6 blogs)",
      link: "https://github.com/CharlotteMD/"
    },
    {
      title: "The three questions I am constantly asked about my job",
      link: "https://github.com/CharlotteMD/"
    },
    {
      title: "The three unexpected benefits of doing a coding bootcamp",
      link: "https://github.com/CharlotteMD/"
    },
    {
      title: "Three ways anyone can support women in tech",
      publication: 'BCG Digital Ventures Engineering Blog',
      link: "https://medium.com/bcgdv-engineering/3-ways-anyone-can-support-women-in-tech-2923a44ec82f"
    },
    {
      title: "The coding bootcamp - one year on",
      publication: 'The Startup',
      link: "https://medium.com/swlh/the-coding-bootcamp-1-year-on-2770cbafebca"
    },
    {
      title: "Why I'm so excited about voice assistants",
      publication: 'Voice Tech Podcast',
      link: "https://medium.com/voice-tech-podcast/why-im-so-excited-about-voice-assistants-bf5156e4d022#c6e4-6aeaca5e58a4"
    },
    {
      title: "Where to start with creating voice apps",
      link: "https://github.com/CharlotteMD/"
    },
    {
      title: "How to Start Developing for Amazon Alexa",
      publication: 'BCG Digital Ventures Engineering Blog',
      link: "https://medium.com/bcgdv-engineering/how-to-start-developing-for-amazon-alexa-a246e08b4ff2/"
    },
    {
      title: "Diversity in Tech Recruiting - a New Lens",
      publication: 'BCG Digital Ventures Engineering Blog',
      link: "https://medium.com/bcgdv-engineering/diversity-in-tech-recruiting-a-new-lense-7420fd53e52c"
    },
  ];

  const otherBlogs = [
    {
      title: "Charlotte Davies, Associate Engineer at BCG Digital Ventures",
      publication: 'Courier Magazine (print)',
      link: "https://lh3.googleusercontent.com/uUf3P2ado0kxgRVkOjoJGy8AxtFE-2WfNp8LTHB6CFtUWOtozo9yX6PLxcVAsgIBLgvq5T704LV89jlm8wJkwCvxp7VYtiXHRxaPzvUo"
    },
    {
      title: "Interview with Charlotte Davies",
      publication: 'Shes Building a Robot Blog',
      link: "https://medium.com/shes-building-a-robot/charlotte-davies-3132ca011747"
    },
    {
      title: "DV Faces - Charlotte Davies, Engineer at BCG Digital Ventures, London",
      publication: 'BCG Digital Ventures Pollen Blog',
      link: "https://pollen.bcgdv.com/faces-charlotte-davies-engineer-at-bcg-digital-ventures-london?utm_source=linkedin&utm_medium=referral&utm_campaign=pollen"
    },
    {
      title: "It was really the choice between keeping coding as a hobby and making it a career",
      publication: 'Hire First Blog',
      link: "https://medium.com/hirefirst/it-was-really-the-choice-between-keeping-coding-as-a-hobby-and-making-it-a-career-f1e52d94d90d"
    },
    {
      title: "Are Coding Bootcamps Worth It? A Cost-Benefit Analysis",
      publication: 'Fullstack Academy',
      link: "https://www.fullstackacademy.com/blog/are-coding-bootcamps-worth-it"
    },
    {
      title: "Por dónde empezar con el desarrollo de Skills de Alexa (serie de 6 blogs)",
      publication: 'Planeta Chatbot',
      link: "https://planetachatbot.com/desarrollo-de-skills-de-alexa-developer-console-f5efedda02cf"
    }

];

function Blogs() {
  return (
    <div className="Blogs">
      <h2 className="pageTitle">Blogs</h2>
      <div className="careerJourney">
        <h3 className="subtitle">Blogs written by me</h3>
        <ul className="blockContainer">
            {myBlogs.map(myBlogs => (
                <MyBlogs blog={myBlogs} />
            ))}
        </ul>
        <h3 className="subtitle">Blogs written by others</h3>
        <ul className="blockContainer">
            {otherBlogs.map(otherBlogs => (
                <MyBlogs blog={otherBlogs} />
            ))}
        </ul>
      </div>
    </div>
  );
}

export default Blogs;
