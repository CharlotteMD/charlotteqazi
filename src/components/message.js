import React from "react";

import "../css/style.css";

function Message() {
  const message = ["Hi, I'm Charlotte", "THIS IS MY WEBSITE", "I love coding"];
  let i = 0;
  let jsxArray = [];
  for (i = 0; i < message.length; i++) {
    jsxArray.push(
      <div className="background">
        <h1 className="typewriter">{message[i]}</h1>
      </div>
    );
  }
  return jsxArray;
  //   const message = [
  //     "WELCOME TO MY WORLD",
  //     "THIS IS MY WEBSITE",
  //     "I AM AT YOUR SERVICE"
  //   ];
  //   let i = 0;
  //   for (i = 0; i < message.length; i++) {
  //     return (
  //       <div className="background">
  //         <h1 className="typewriter">{message[i]}</h1>
  //       </div>
  //     );
  //   }
}

export default Message;
