import React from "react";

import Message from "./message.js";

// import charlotte from "../images/charlotte.png";

import "../css/style.css";

const items = [
  {
    love: "Things I love about JavaScript",
    emoji1: "🛠",
    one:
      "I can build almost anything I can imagine - I love experimenting with all sorts: Alexa Skills Development in Node.js, Three.js, games written in vanilla JS",
    emoji2: "✨",
    two:
      "You can make a static site sparkle! I love being able to wow users with JavaScript animations and features!",
    emoji3: "🖲",
    three: "Click here to see some of my recent projects"
  },
  {
    love: "Things I love about coding",
    emoji1: "🖥",
    one: "Seeing the screen transform before your eyes",
    emoji2: "🐛",
    two: "The euphoria of fixing a bug",
    emoji3: "🧠",
    three: "The opportunity to learn something new every day"
  },
  {
    love: "Things I love about my job",
    emoji1: "👷🏻‍♀️",
    one:
      "Building new ideas that make a difference to our clients, users and the World",
    emoji2: "🏃🏻‍♀️",
    two:
      "The speed of working to build new ventures at BCG DV - you have to get stuck in and be prepared for things to change quickly - every day is different and you never quite know what to expect ",
    emoji3: "🙏🏻",
    three:
      "Working with smart and ambitious people - being inspired, learning from them"
  },
  {
    love: "Other things I love",
    emoji1: "🧵",
    one:
      "Making things - currently I'm dress making but I have also been known to knit, scrapbook and occasionally bake",
    emoji2: "💅🏻",
    two:
      "Painting nails - this is how I relax. I love giving my friends manicures too and given the time I'd love to become a qualified nail technician",
    emoji3: "📚",
    three:
      "Reading, well listening! I listen to audiobooks on my commute and whenever else I have time to myself. My favourites are biographies and thrillers."
  }
];

const Passion = ({ item }) => (
  <div className="blockItem">
    <h3>{item.love}</h3>
    <ul>
      <li>
        <p>
          <span className="emoji" role="img">
            {item.emoji1}
          </span>
          {item.one}
        </p>
      </li>
      <li>
        <p>
          <span className="emoji" role="img">
            {item.emoji2}
          </span>
          {item.two}
        </p>
      </li>
      <li>
        <p>
          <span className="emoji" role="img">
            {item.emoji3}
          </span>
          {item.three}
        </p>
      </li>
    </ul>
  </div>
);

function Intro() {
  return (
    <div className="intro">
      {/* <Message /> */}
      <div className="blockContainer">
        {items.map(item => (
          <Passion item={item} />
        ))}
      </div>
    </div>
  );
}

export default Intro;
