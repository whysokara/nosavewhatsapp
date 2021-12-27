import "./App.css";
import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  // const num = "918889804070";
  const inputHandler = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
  };
  return (
    <div className="App">
      <div className="container-fluid">
        <h2>Now you don't have to save a contact to WhatsApp</h2>
        <input
          onChange={inputHandler}
          type="text"
          value={input}
          placeholder="enter number"
        />
        <br />
        <a href={`https://wa.me/91${input}`}>
          <button>Ping on WhatsApp</button>
        </a>
      </div>
    </div>
  );
}

export default App;
