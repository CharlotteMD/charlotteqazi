import React from 'react';
import courierImage from "../images/courier.JPG";

function Courier() {
    return (
      <div className="courier">
        <div className="blockContainer">
            <img src={courierImage} alt="Courier Magazine Interview" />
        </div>
      </div>
    );
  }
  
  export default Courier;