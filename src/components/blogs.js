import React from "react";

import { MyProjects } from "./shared/blocks.js";


import "../css/style.css";

const myBlogs = [
    {
      title: "Where to start with coding",
      image: '',
      link: "https://github.com/CharlotteMD/wdi-first-project"
    },
    {
      title: "What NOT to do when learning to code",
      image: '',
      link: "https://github.com/CharlotteMD/wdi-second-project"
    },
    {
      title: "What it's like to do a coding bootcamp",
      image: '',
      link: "https://github.com/CharlotteMD/wdi-group-project"
    },
    {
      title: "Why you don't need to be good at Maths to code",
      image: '',
      link: "https://github.com/CharlotteMD/wdi-fourth-project"
    },
    {
      title: "How to prepare for a coding bootcamp",
      image: '',
      link: "https://github.com/CharlotteMD/"
    },
    {
      title: "Where can you work if you can code",
      image: '',
      link: "https://github.com/CharlotteMD/"
    },
    {
      title: "Keeping up with your Kolleagues",
      image: '',
      link: "https://github.com/CharlotteMD/advent-calendar"
    },
    {
      title: "A solution to copy to clipboard",
      image: '',
      link: "https://github.com/CharlotteMD/"
    },
    {
      title: "How to fix bugs",
      image: '',
      link: "https://github.com/CharlotteMD/"
    },
    {
      title: "How to get paid to code",
      image: '',
      link: "https://github.com/CharlotteMD/"
    },
    {
      title: "Where to start with Alexa Skills development series (6 blogs)",
      image: '',
      link: "https://github.com/CharlotteMD/"
    },
    {
      title: "The three questions I am constantly asked about my job",
      image: '',
      link: "https://github.com/CharlotteMD/"
    },
    {
      title: "The three unexpected benefits of doing a coding bootcamp",
      image: '',
      link: "https://github.com/CharlotteMD/"
    },
    {
      title: "Three ways anyone can support women in tech",
      image: '',
      link: "https://github.com/CharlotteMD/"
    },
    {
      title: "The coding bootcamp - one year on",
      image: '',
      link: "https://github.com/CharlotteMD/"
    },
    {
      title: "Why I'm so excited about voice assistants",
      image: '',
      link: "https://github.com/CharlotteMD/"
    },
    {
      title: "Where to start with creating voice apps",
      image: '',
      link: "https://github.com/CharlotteMD/"
    }
  ];

  const otherBlogs = [
    {
      title: "Diversity in Tech Recruiting - a New Lens (BCG DV Engineering blog)",
      image: '',
      link: "https://medium.com/bcgdv-engineering/diversity-in-tech-recruiting-a-new-lense-7420fd53e52c"
    },
    {
      title: "DV Faces - Charlotte Davies, Engineer at BCG Digital Ventures, Lodnon (BCG DV Pollen blog)",
      image: '',
      link: "https://medium.com/bcgdv-engineering/faces-charlotte-davies-engineer-at-bcg-digital-ventures-london-39ed51378013"
    },

];

function Blogs() {
  return (
    <div className="Blogs">
      <h2 className="pageTitle">Blogs</h2>
      <div className="careerJourney">
        <h3 className="subtitle">Blogs written by me</h3>
        <ul className="blockContainer">
            {myBlogs.map(myBlogs => (
                <MyProjects project={myBlogs} />
            ))}
        </ul>
        <h3 className="subtitle">Blogs written by others</h3>
        <ul className="blockContainer">
            {otherBlogs.map(otherBlogs => (
                <MyProjects project={otherBlogs} />
            ))}
        </ul>
      </div>
    </div>
  );
}

export default Blogs;
