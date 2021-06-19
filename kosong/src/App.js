import { useState } from "react";
import "./App.css";
import React from "react";
import Autosuggest from "react-autosuggest";
import ReactHook from "./react-hook";
import ReactClass from "./react-class";
import ReactContoh from "./reactContoh";

function App() {
  return (
    <div className="container">
      <h3>Class Component</h3>
      <ReactClass />
      <h3>Hook</h3>
      <ReactHook />
      {/* <ReactContoh /> */}
    </div>
  );
}

export default App;
