import { CurrentModule, React, useApp } from "../CurrentModule";
import Offspring from "./Parent";
const name = __filename.split(/.*\/(.*)\.jsx$/)[1];
console.log(`Reloaded ${name}`);
const Component = () => {
  // console.log(`rendered ${name}`)
  // const { state, actions } = useApp();
  return (
    <div className={name}>
      <p> Some text from a {name} </p>
      <Offspring />
      <Offspring />
    </div>
  );
};

export default Component;
// CurrentModule(Component);
