import React from "react";
import CurrentModule from "./CurrentModule";
import Grandparent from "./components/Grandparent";
import "./styles.css";
function App() {
  return (
    <div className="App">
      <Grandparent />
    </div>
  );
}
CurrentModule(App);
