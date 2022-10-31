import React, {useState} from "react";

import { MyBlogs } from "./shared/blocks.js";

import "../css/style.css";

const myBlogs = [
    {
      title: "Do not push to production until you have considered these things – why we must take accessibility seriously",
      publication: 'iJS London 2022',
      link: "https://javascript-conference.com/javascript-practices-tools/do-not-push-to-production-until-you-have-considered-these-things-why-we-must-take-accessibility-seriously/",
      tags: 'Tech'
    },
    {
      title: "Low-code/No-code: Was it worth learning to code?",
      publication: 'Women of Silicon Roundabout, London 2021',
      link: "https://www.women-in-technology.com/agenda",
      tags: 'Tech'
    },
    {
      title: "Panel Discussion: How To Get Unstuck & Pursue A Career You Love",
      publication: 'General Assembly',
      link: "https://generalassemb.ly/instructors/charlotte-qazi/29097",
      tags: 'Work'
    },
    {
      title: "Low-code/No-code: Was it worth learning to code?",
      publication: 'iJS London 2021',
      link: "https://javascript-conference.com/javascript-practices-tools/low-code-no-code-was-it-worth-learning-to-code/",
      tags: 'Tech'
    },
    
  ];

const blogThemes = ['All', 'Diversity', 'Learning', 'Tech', 'Work', 'Interviews'];

function Speaking() {

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
      <h2 className="pageTitle">Speaking Engagements</h2>

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
        
        { blogTags === 'All' && (
          <ul className="blockContainer">
            {myBlogs.map(myBlogs => (
              <MyBlogs blog={myBlogs} speak={true} />
            ))}
          </ul>
        )}

        <ul className="blockContainer">
          {myBlogs.filter(myBlogs => myBlogs.tags === blogTags).map(filteredBlog => (
              <MyBlogs blog={filteredBlog} speak={true}/>
            ))}
        </ul>

        <h3 className="subtitle">If you'd like me to speak at your event, please contact me at <a className='grey-a' href='mailto:charlotte.qazi@gmail.com'>charlotte.qazi@gmail.com</a>.</h3>
        <h3 className="subtitle">For a taster of my previous talks, you can find me on <a className='grey-a' href='https://www.youtube.com/channel/UCjX-8tiXwbV63LETMG5jHHw'>YouTube</a>.</h3>
                 
      </div>
    </div>
  );
}

export default Speaking;
