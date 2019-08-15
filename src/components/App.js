import React from "react";

import Header from "./shared/header.js";
import Footer from "./shared/footer.js";
import Intro from "./intro";
import Career from "./career";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "../css/style.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Router>
          <Route path="/intro" component={Intro} />
          <Route path="/career" component={Career} />
          <Route exact path="/" component={Intro} />
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
