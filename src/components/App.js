import React from "react";

import Header from "./shared/header.js";
import Footer from "./shared/footer.js";
import Intro from "./intro";
import About from "./about";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "../css/style.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Route path="/intro" component={Intro} />
        <Route path="/about" component={About} />
        <Route exact path="/" component={Intro} />
      </Router>

      <Footer />
    </div>
  );
}

export default App;
