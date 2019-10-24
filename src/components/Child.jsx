import { CurrentModule, React, useApp } from "../CurrentModule";

import Offspring from "./Grandchild";
const name = __filename.split(/.*\/(.*)\.jsx$/)[1];
console.log(`Reloaded ${name}`);
const Component = () => {
  // console.log(`rendered ${name}`)
  const { state, actions } = useApp();
  return (
    <div className={name}>
      <p>{name} </p>
      <Offspring />
      <Offspring />
    </div>
  );
};

export default Component;
CurrentModule(Component);
