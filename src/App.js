import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container-fluid p-2 weather-holder">
        <Weather defaultCity="New York" />
        <footer>
          <br />
          This page was built by{" "}
          <a
            href="https://www.shecodes.io/graduates/64402-kimberly-culzac"
            target="_blank"
            rel="noopener noreferrer"
          >
            Kimberly C.
            <br />
          </a>{" "}
          <a
            href="https://github.com/kcul1/kc-shecodes-react-weatherapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-sourced on GitHub
            <br />
          </a>{" "}
          <a href="https://" target="_blank" rel="noopener noreferrer">
            Hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
