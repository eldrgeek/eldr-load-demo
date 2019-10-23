import React from "react";
import Offspring from "./Grandchild";
const name = __filename.split(/.*\/(.*)\.jsx$/)[1];
console.log(`Reloaded ${name}`);
const Component = () => {
  // console.log(`rendered ${name}`)
  return (
    <div className={name}>
      <p> Some text from a {name} </p>
      <Offspring />
      <Offspring />
    </div>
  );
};

export default Component;
