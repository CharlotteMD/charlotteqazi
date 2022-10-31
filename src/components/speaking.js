import React, {useState} from "react";

import { MyBlogs } from "./shared/blocks.js";

import "../css/style.css";

const myBlogs = [
    {
      title: "DO NOT push to production without checking these things",
      publication: 'My Medium Blog',
      link: "https://charlotteqazi.medium.com/do-not-push-to-production-without-checking-these-things-7f1d1ef845be",
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
              <MyBlogs blog={myBlogs} />
            ))}
          </ul>
        )}

        <ul className="blockContainer">
          {myBlogs.filter(myBlogs => myBlogs.tags === blogTags).map(filteredBlog => (
              <MyBlogs blog={filteredBlog} />
            ))}
        </ul>
                 
      </div>
    </div>
  );
}

export default Speaking;
