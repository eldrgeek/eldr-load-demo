import React from "react";
import Offspring from "./Parent";
const name = __filename.split(/.*\/(.*)\.jsx$/)[1];
console.log(`Reloaded ${name}`);
const Component = () => {
  return (
    <div className={name}>
      <p> Some text from a {name} </p>
      <Offspring />
      <Offspring />
    </div>
  );
};

export default Component;
