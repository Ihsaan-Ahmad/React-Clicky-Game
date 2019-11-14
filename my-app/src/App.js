import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      <nav className="navbar">
        <ul>
          <li className="brand">
            <a href="/">Clicky Game</a>
          </li>
          <li>Click an image to begin!</li>
          <li>"Score: " "0" " | Top Score: " "0"</li>
        </ul>
      </nav>
      <br></br>
      <header className="header">
        <h1>Clicky Game!</h1>
        <h2>
          Click on an image to earn points, but don't click on any more than
          once!
        </h2>
      </header>
      <br></br>
      <main class="container">
        <p>asdddddddddddddddddddddddddddddddddddddddddddddddddd</p>
      </main>
      <footer className="footer">
        <div className="bottom">
          Clicky Game
          <a
            alt="react"
            href="https://ihsaan-ahmad.github.io/React-Clicky-Game/"
          > GitHub</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
