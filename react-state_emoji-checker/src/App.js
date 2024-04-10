import { useState } from "react";
import React from "react";
import "./styles.css";




export default function App() {
  //let code = "?";

  const validCode = "🐡🐠🐋";

  const [code, setCode] = useState("");

  const handleClick = (event) => {
    setCode(code + event.target.textContent);
  };

  const handleReset = () => {
    setCode("");
  };



  return (
    <div className="container">
      <div className="button-container">
        <button
          type="button"
          onClick={handleClick}
        >
          <span role="img" aria-label="Pufferfish">
            🐡
          </span>
        </button>
        <button
          type="button"
          onClick={handleClick}
        >
          <span role="img" aria-label="Whale">
            🐋
          </span>
        </button>
        <button
          type="button"
          onClick={handleClick}
        >
          <span role="img" aria-label="Clownfish">
            🐠
          </span>
        </button>{" "}
      </div>

      <button
        type="button"
        onClick={handleReset} 
      >
        Reset
      </button>

      {code === validCode && <p>Valid code!</p>}
    </div>
  );
}



