import React from "react";

import Header from "./shared/header.js";
import Footer from "./shared/footer.js";
import Intro from "./intro";
import Career from "./career";
import Projects from "./projects";
import Interests from "./interests";
import Skills from "./skills";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "../css/style.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Router>
          <Route path="/career" component={Career} />
          <Route path="/projects" component={Projects} />
          <Route path="/interests" component={Interests} />
          <Route path="/skills" component={Skills} />
          <Route exact path="/" component={Intro} />
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
