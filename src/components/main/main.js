import React from "react";
import "./main.css";

const Main = props => (
  <div>
    <main className="content">{props.children}</main>;
    <div>
      <footer className="footer">
        <div className="bottom">
          Clicky Game
          <a
            alt="react"
            href="https://ihsaan-ahmad.github.io/React-Clicky-Game/"
          >
            GitHub
          </a>
        </div>
      </footer>
    </div>
  </div>
);

export default Main;
