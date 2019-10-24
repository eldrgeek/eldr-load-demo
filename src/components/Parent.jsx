import { CurrentModule, React, useApp } from "../CurrentModule";
import Offspring from "./Child";
const name = __filename.split(/.*\/(.*)\.jsx$/)[1];
console.log(`Reloaded ${name}`);

const Component = () => {
  return (
    <div className={name}>
      <p> {name} </p>
      <Offspring />
      <Offspring />
    </div>
  );
};

export default Component;
CurrentModule(Component);
