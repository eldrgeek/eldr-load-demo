import React from "react";
import CurrentModule from "./CurrentModule";
import Grandparent from "./components/Grandparent";
import "./styles.css";
function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Grandparent />
    </div>
  );
}
CurrentModule(App);
