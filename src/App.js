import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          <a
            href="https://github.com/AlexaneJ/my_react_weather_app"
            target="_blank"
            rel="noopener noreferrer"
            className = "ref"
          >
           Open source code
          </a>
          {" "}  by Alexane Jouglar
          </footer>
      </div>
    </div>
  );
}