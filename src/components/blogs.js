import React, {useState} from "react";

import { MyBlogs } from "./shared/blocks.js";

import portfolio from "../images/portfolio.jpg";


import "../css/style.css";

const myBlogs = [
    {
      title: "DO NOT push to production without checking these things",
      publication: 'My Medium Blog',
      link: "https://charlotteqazi.medium.com/do-not-push-to-production-without-checking-these-things-7f1d1ef845be",
      tags: 'Tech'
    },
    {
      title: "Where to start with coding",
      publication: 'Code Like a Girl',
      link: "https://code.likeagirl.io/where-to-start-with-coding-a10ebdd0ed56",
      tags: 'Learning'
    },
    {
      title: "What NOT to do when learning to code",
      publication: 'Code Like a Girl',
      link: "https://code.likeagirl.io/what-not-to-do-when-learning-to-code-1c0cd3b0e4c",
      tags: 'Learning'
    },
    {
      title: "What it's like to do a coding bootcamp",
      publication: 'Code Like a Girl',
      link: "https://code.likeagirl.io/what-its-like-to-do-a-coding-bootcamp-74eadc490efat",
      tags: 'Learning'
    },
    {
      title: "Why you don't need to be good at Maths to code",
      publication: 'Code Like a Girl',
      link: "https://code.likeagirl.io/why-you-dont-need-to-be-good-at-maths-to-code-94076bf76293",
      tags: 'Learning'
    },
    {
      title: "How to prepare for a coding bootcamp",
      publication: 'Code Like a Girl',
      link: "https://code.likeagirl.io/how-to-prepare-for-a-coding-bootcamp-538da248933b",
      tags: 'Learning'
    },
    {
      title: "Where can you work if you can code",
      publication: 'Code Like a Girl',
      link: "https://code.likeagirl.io/where-can-you-work-if-you-code-a642fced215b",
      tags: 'Work'
    },
    {
      title: "Keeping up with your Kolleagues",
      publication: 'Code Like a Girl',
      link: "https://code.likeagirl.io/keeping-up-with-your-kolleagues-315c79022e2c",
      tags: 'Work'
    },
    {
      title: "A solution to copy to clipboard",
      publication: 'My Medium blog',
      link: "https://charlotteqazi.medium.com/a-solution-to-copy-to-clipboard-2b499e1659cf",
      tags: 'Tech'
    },
    {
      title: "How to fix bugs",
      publication: 'Code Like a Girl',
      link: "https://code.likeagirl.io/its-a-bugs-life-how-to-not-lose-the-will-to-live-as-a-developer-d5440f3a3c30",
      tags: 'Tech'
    },
    {
      title: "How to get paid to code",
      publication: 'Code Like a Girl',
      link: "https://code.likeagirl.io/how-to-get-paid-to-code-db95570270d9",
      tags: 'Work'
    },
    {
      title: "Where to start with Alexa Skills development series (6 blogs)",
      publication: 'My Medium blog',
      link: "https://code.likeagirl.io/where-to-start-with-alexa-skills-development-part-1-alexa-developer-console-654687788948",
      tags: 'Tech'
    },
    {
      title: "The three questions I am constantly asked about my job",
      publication: 'Code Like a Girl',
      link: "https://code.likeagirl.io/the-3-questions-that-i-am-constantly-asked-about-my-job-4acd9eabde74",
      tags: 'Work'
    },
    {
      title: "The three unexpected benefits of doing a coding bootcamp",
      publication: 'Code Like a Girl',
      link: "https://code.likeagirl.io/the-3-unexpected-benefits-of-doing-a-coding-bootcamp-41b06d9073d",
      tags: 'Learning'
    },
    {
      title: "Three ways anyone can support women in tech",
      publication: 'BCG Digital Ventures Engineering Blog',
      link: "https://medium.com/bcgdv-engineering/3-ways-anyone-can-support-women-in-tech-2923a44ec82f",
      tags: 'Diversity'
    },
    {
      title: "The coding bootcamp - one year on",
      publication: 'The Startup',
      link: "https://medium.com/swlh/the-coding-bootcamp-1-year-on-2770cbafebca",
      tags: 'Learning'
    },
    {
      title: "Why I'm so excited about voice assistants",
      publication: 'Voice Tech Podcast',
      link: "https://medium.com/voice-tech-podcast/why-im-so-excited-about-voice-assistants-bf5156e4d022#c6e4-6aeaca5e58a4",
      tags: 'Tech'
    },
    {
      title: "Where to start with creating voice apps",
      publication: 'Voice Tech Podcast',
      link: "https://medium.com/voice-tech-podcast/where-to-start-with-creating-voice-apps-3b0a6e09c9b",
      tags: 'Tech'
    },
    {
      title: "How to Start Developing for Amazon Alexa",
      publication: 'BCG Digital Ventures Engineering Blog',
      link: "https://medium.com/bcgdv-engineering/how-to-start-developing-for-amazon-alexa-a246e08b4ff2/",
      tags: 'Tech'
    },
    {
      title: "Diversity in Tech Recruiting - a New Lens",
      publication: 'BCG Digital Ventures Engineering Blog',
      link: "https://medium.com/bcgdv-engineering/diversity-in-tech-recruiting-a-new-lense-7420fd53e52c",
      tags: 'Diversity'
    },
  ];

  const otherBlogs = [
    {
      title: "Charlotte Davies, Associate Engineer at BCG Digital Ventures",
      publication: 'Courier Magazine (print)',
      link: "/courier",
      tags: 'Interviews'
    },
    {
      title: "Interview with Charlotte Davies",
      publication: 'Shes Building a Robot Blog',
      link: "https://medium.com/shes-building-a-robot/charlotte-davies-3132ca011747",
      tags: 'Interviews'
    },
    {
      title: "DV Faces - Charlotte Davies, Engineer at BCG Digital Ventures, London",
      publication: 'BCG Digital Ventures Pollen Blog',
      link: "https://pollen.bcgdv.com/faces-charlotte-davies-engineer-at-bcg-digital-ventures-london?utm_source=linkedin&utm_medium=referral&utm_campaign=pollen",
      tags: 'Interviews'
    },
    {
      title: "It was really the choice between keeping coding as a hobby and making it a career",
      publication: 'Hire First Blog',
      link: "https://medium.com/hirefirst/it-was-really-the-choice-between-keeping-coding-as-a-hobby-and-making-it-a-career-f1e52d94d90d",
      tags: 'Interviews'
    },
    {
      title: "Are Coding Bootcamps Worth It? A Cost-Benefit Analysis",
      publication: 'Fullstack Academy',
      link: "https://www.fullstackacademy.com/blog/are-coding-bootcamps-worth-it",
      tags: 'Learning'
    },
    {
      title: "Por dónde empezar con el desarrollo de Skills de Alexa (serie de 6 blogs)",
      publication: 'Planeta Chatbot',
      link: "https://planetachatbot.com/desarrollo-de-skills-de-alexa-developer-console-f5efedda02cf",
      tags: 'Tech'
    },
    {
      title: "What Skills Have You Found Vital To Your Job?",
      publication: 'Stemettes Zine',
      link: "https://stemettes.org/zine/advice/what-skills-have-you-found-vital-to-your-job/",
      tags: 'Work'
    },

];

const blogThemes = ['All', 'Diversity', 'Learning', 'Tech', 'Work', 'Interviews'];

function Blogs() {

  const [blogTags, setBlogTags] = useState('All');

  function filterBlogs(filterType) {
    setBlogTags(filterType);
    const dropdown = document.querySelector(".dropdown-content");
    dropdown.classList.toggle("isopen");
  }

  function handleDropdown() {
    const dropdown = document.querySelector(".dropdown-content");
    dropdown.classList.toggle("isopen");
  }

  return (
    <div className="Blogs">
      <h2 className="pageTitle">Blogs</h2>

      <div class="dropdown">
        <button class="dropbtn" aria-label="filter by topic" onClick={()=>handleDropdown()}>Filter by topic</button>
        <div class="dropdown-content">
          {blogThemes.map(blogThemes => (
            <button className='filterButton' aria-label={blogThemes} onClick={() => filterBlogs(`${blogThemes}`)}>
              {blogThemes}
            </button>
          ))}
        </div>
      </div>

      <div className="careerJourney">

      {blogTags !== 'Interviews' && (
        <h3 className="subtitle">Blogs written by me</h3>
        )}
        
        { blogTags === 'All' && (
          <ul className="blockContainer">
            {myBlogs.map(myBlogs => (
              <MyBlogs blog={myBlogs} />
            ))}
          </ul>
        )}

        <ul className="blockContainer">
          {myBlogs.filter(myBlogs => myBlogs.tags === blogTags).map(filteredBlog => (
              <MyBlogs blog={filteredBlog} />
            ))}
        </ul>
                 
        <h3 className="subtitle">Blogs written by others</h3>

        { blogTags === 'All' && (
          <ul className="blockContainer">
              {otherBlogs.map(otherBlogs => (
                  <MyBlogs blog={otherBlogs} />
              ))}
          </ul>
        )}

        <ul className="blockContainer">
          {otherBlogs.filter(otherBlogs => otherBlogs.tags === blogTags).map(filteredBlog => (
              <MyBlogs blog={filteredBlog} />
            ))}
        </ul>
      </div>
    </div>
  );
}

export default Blogs;
