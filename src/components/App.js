import React from "react";

import Elevator from 'elevator.js';
import elevatorAudio from '../audio/elevator.mp3';
import bellAudio from '../audio/bell.mp3';
import volumeIcon from '../images/volume.png';

import Header from "./shared/header.js";
import Footer from "./shared/footer.js";
import Intro from "./intro";
import Career from "./career";
import Projects from "./projects";
import Blogs from "./blogs";
import Courier from "./courier";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "../css/style.css";

function App() {


    var elevator = new Elevator({
      element: document.querySelector('.elevator-button'),
      mainAudio: elevatorAudio,
      endAudio: bellAudio
    });


  return (
    <div className="App">
      <Header />
      <div className="content">
        <Router>
          <Route path="/career" component={Career} />
          <Route path="/projects" component={Projects} />
          <Route path="/blogs" component={Blogs} />
          <Route path="/courier" component={Courier} />
          <Route exact path="/" component={Intro} />
        </Router>
      </div>
      <button 
        class="elevator-button" 
        aria-label='Back to Top' 
        onClick={()=>elevator.elevate()}>
          Back to top
        <img src={volumeIcon} alt="sound on"/>
      </button>
      <Footer />
    </div>
  );
}

export default App;
