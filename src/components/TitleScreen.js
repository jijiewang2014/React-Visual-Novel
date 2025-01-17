import React from "react";

function TitleScreen(props) {
  return (
    <div className="overlay" id="title-overlay">
      <div id="title-screen-header">
        
        <ul id="menu">
          <li>
            <span onClick={props.beginStory}>Begin</span>
          </li>
          <li>
            <span onClick={props.toggleLoadMenu}>Continue</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TitleScreen;
