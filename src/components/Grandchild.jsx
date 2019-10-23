import React from "react";
const name = __filename.split(/.*\/(.*)\.jsx$/)[1];
console.log(`Reloaded ${name}`);

const Component = () => {
  // console.log(`rendered ${name}`)
  return (
    <div className={name}>
      <p> Some text from a {name} </p>
    </div>
  );
};

export default Component;
