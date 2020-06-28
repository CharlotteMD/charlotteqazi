import React, {useState} from "react";

import { MyBlogs } from "./shared/blocks.js";

import portfolio from "../images/portfolio.jpg";


import "../css/style.css";

const myBlogs = [
    {
      title: "Where to start with coding",
      publication: 'Code Like a Girl',
      image: portfolio,
      link: "https://code.likeagirl.io/where-to-start-with-coding-a10ebdd0ed56",
      tags: 'learning'
    },
    {
      title: "What NOT to do when learning to code",
      publication: 'Code Like a Girl',
      link: "https://code.likeagirl.io/what-not-to-do-when-learning-to-code-1c0cd3b0e4c",
      tags: 'learning'
    },
    {
      title: "What it's like to do a coding bootcamp",
      publication: 'Code Like a Girl',
      link: "https://code.likeagirl.io/what-its-like-to-do-a-coding-bootcamp-74eadc490efat",
      tags: 'learning'
    },
    {
      title: "Why you don't need to be good at Maths to code",
      publication: 'Code Like a Girl',
      link: "https://code.likeagirl.io/why-you-dont-need-to-be-good-at-maths-to-code-94076bf76293",
      tags: 'learning'
    },
    {
      title: "How to prepare for a coding bootcamp",
      publication: 'Code Like a Girl',
      link: "https://code.likeagirl.io/how-to-prepare-for-a-coding-bootcamp-538da248933b",
      tags: 'learning'
    },
    {
      title: "Where can you work if you can code",
      publication: 'Code Like a Girl',
      link: "https://code.likeagirl.io/where-can-you-work-if-you-code-a642fced215b",
      tags: 'work'
    },
    {
      title: "Keeping up with your Kolleagues",
      publication: 'Code Like a Girl',
      link: "https://code.likeagirl.io/keeping-up-with-your-kolleagues-315c79022e2c",
      tags: 'work'
    },
    {
      title: "A solution to copy to clipboard",
      publication: 'My Medium blog',
      link: "https://medium.com/@charlotte.davies/a-solution-to-copy-to-clipboard-2b499e1659cf",
      tags: 'tech'
    },
    {
      title: "How to fix bugs",
      publication: 'Code Like a Girl',
      link: "https://code.likeagirl.io/its-a-bugs-life-how-to-not-lose-the-will-to-live-as-a-developer-d5440f3a3c30",
      tags: 'tech'
    },
    {
      title: "How to get paid to code",
      publication: 'Code Like a Girl',
      link: "https://code.likeagirl.io/how-to-get-paid-to-code-db95570270d9",
      tags: 'work'
    },
    {
      title: "Where to start with Alexa Skills development series (6 blogs)",
      publication: 'My Medium blog',
      link: "https://code.likeagirl.io/where-to-start-with-alexa-skills-development-part-1-alexa-developer-console-654687788948",
      tags: 'tech'
    },
    {
      title: "The three questions I am constantly asked about my job",
      publication: 'Code Like a Girl',
      link: "https://code.likeagirl.io/the-3-questions-that-i-am-constantly-asked-about-my-job-4acd9eabde74",
      tags: 'work'
    },
    {
      title: "The three unexpected benefits of doing a coding bootcamp",
      publication: 'Code Like a Girl',
      link: "https://code.likeagirl.io/the-3-unexpected-benefits-of-doing-a-coding-bootcamp-41b06d9073d",
      tags: 'learning'
    },
    {
      title: "Three ways anyone can support women in tech",
      publication: 'BCG Digital Ventures Engineering Blog',
      link: "https://medium.com/bcgdv-engineering/3-ways-anyone-can-support-women-in-tech-2923a44ec82f",
      tags: 'diversity'
    },
    {
      title: "The coding bootcamp - one year on",
      publication: 'The Startup',
      link: "https://medium.com/swlh/the-coding-bootcamp-1-year-on-2770cbafebca",
      tags: 'learning'
    },
    {
      title: "Why I'm so excited about voice assistants",
      publication: 'Voice Tech Podcast',
      link: "https://medium.com/voice-tech-podcast/why-im-so-excited-about-voice-assistants-bf5156e4d022#c6e4-6aeaca5e58a4",
      tags: 'tech'
    },
    {
      title: "Where to start with creating voice apps",
      publication: 'Voice Tech Podcast',
      link: "https://medium.com/voice-tech-podcast/where-to-start-with-creating-voice-apps-3b0a6e09c9b",
      tags: 'tech'
    },
    {
      title: "How to Start Developing for Amazon Alexa",
      publication: 'BCG Digital Ventures Engineering Blog',
      link: "https://medium.com/bcgdv-engineering/how-to-start-developing-for-amazon-alexa-a246e08b4ff2/",
      tags: 'tech'
    },
    {
      title: "Diversity in Tech Recruiting - a New Lens",
      publication: 'BCG Digital Ventures Engineering Blog',
      link: "https://medium.com/bcgdv-engineering/diversity-in-tech-recruiting-a-new-lense-7420fd53e52c",
      tags: 'diversity'
    },
  ];

  const otherBlogs = [
    {
      title: "Charlotte Davies, Associate Engineer at BCG Digital Ventures",
      publication: 'Courier Magazine (print)',
      link: "https://lh3.googleusercontent.com/uUf3P2ado0kxgRVkOjoJGy8AxtFE-2WfNp8LTHB6CFtUWOtozo9yX6PLxcVAsgIBLgvq5T704LV89jlm8wJkwCvxp7VYtiXHRxaPzvUo",
      tags: ''
    },
    {
      title: "Interview with Charlotte Davies",
      publication: 'Shes Building a Robot Blog',
      link: "https://medium.com/shes-building-a-robot/charlotte-davies-3132ca011747",
      tags: ''
    },
    {
      title: "DV Faces - Charlotte Davies, Engineer at BCG Digital Ventures, London",
      publication: 'BCG Digital Ventures Pollen Blog',
      link: "https://pollen.bcgdv.com/faces-charlotte-davies-engineer-at-bcg-digital-ventures-london?utm_source=linkedin&utm_medium=referral&utm_campaign=pollen",
      tags: ''
    },
    {
      title: "It was really the choice between keeping coding as a hobby and making it a career",
      publication: 'Hire First Blog',
      link: "https://medium.com/hirefirst/it-was-really-the-choice-between-keeping-coding-as-a-hobby-and-making-it-a-career-f1e52d94d90d",
      tags: ''
    },
    {
      title: "Are Coding Bootcamps Worth It? A Cost-Benefit Analysis",
      publication: 'Fullstack Academy',
      link: "https://www.fullstackacademy.com/blog/are-coding-bootcamps-worth-it",
      tags: ''
    },
    {
      title: "Por dónde empezar con el desarrollo de Skills de Alexa (serie de 6 blogs)",
      publication: 'Planeta Chatbot',
      link: "https://planetachatbot.com/desarrollo-de-skills-de-alexa-developer-console-f5efedda02cf"
    }

];

const blogThemes = ['all', 'diversity', 'learning', 'tech', 'work'];

function Blogs() {

  const [blogTags, setBlogTags] = useState('all');

  function filterBlogs(filterType) {
    setBlogTags(filterType);
  }

  return (
    <div className="Blogs">
      <h2 className="pageTitle">Blogs</h2>

      {blogThemes.map(blogThemes => (
        <button onClick={() => filterBlogs(`${blogThemes}`)}>{blogThemes}</button>
      ))}

      <div className="careerJourney">
        <h3 className="subtitle">Blogs written by me</h3>
        { blogTags === 'all' && (
          <ul className="blockContainer">
            {myBlogs.map(myBlogs => (
              <MyBlogs blog={myBlogs} />
            ))}
          </ul>
        )}

        { blogTags === 'diversity' && (
          <ul className="blockContainer">
            {myBlogs.filter(myBlogs => myBlogs.tags === 'diversity').map(filteredBlog => (
                <MyBlogs blog={filteredBlog} />
              ))}
        </ul>
        )}

        { blogTags === 'learning' && (
          <ul className="blockContainer">
            {myBlogs.filter(myBlogs => myBlogs.tags === 'learning').map(filteredBlog => (
                <MyBlogs blog={filteredBlog} />
              ))}
        </ul>
        )}

        { blogTags === 'work' && (
          <ul className="blockContainer">
            {myBlogs.filter(myBlogs => myBlogs.tags === 'work').map(filteredBlog => (
                <MyBlogs blog={filteredBlog} />
              ))}
        </ul>
        )}

        { blogTags === 'tech' && (
          <ul className="blockContainer">
            {myBlogs.filter(myBlogs => myBlogs.tags === 'tech').map(filteredBlog => (
                <MyBlogs blog={filteredBlog} />
              ))}
        </ul>
        )}

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
