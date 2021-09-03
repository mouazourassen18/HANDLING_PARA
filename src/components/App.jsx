import React, { useState } from "react";

function App() {
  const [sayHello, setHello] = useState("click Submit");
  const [isHoovered, setisHo] = useState(false);
  function clicked() {
    setHello("submitted");
  }
  function isBlack() {
    setisHo(true);
  }
  function isOut() {
    setisHo(false);
  }
  return (
    <div className="container">
      <h1>{sayHello}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        // this style will  apply assigning the color to the background color

        style={{ backgroundColor: isHoovered ? "black" : "white" }}
        onClick={clicked}
        onMouseOver={isBlack}
        onMouseOut={isOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
