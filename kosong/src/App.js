import { useState } from "react";
import "./App.css";
import React from "react";
import Autosuggest from "react-autosuggest";
import ReactHook from "./react-hook";
import ReactClass from "./react-class";

function App() {
  return (
    <div className="container">
      {/* <ReactClass /> */}
      <ReactHook />
    </div>
  );
}

export default App;
