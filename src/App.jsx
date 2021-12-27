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
      <input
        onChange={inputHandler}
        type="text"
        value={input}
        placeholder="enter number"
      />
      <br />
      <a href={`https://wa.me/${input}`}>
        <button>Ping on WhatsApp</button>
      </a>
    </div>
  );
}

export default App;
