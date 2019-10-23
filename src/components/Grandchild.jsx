import { CurrentModule, React, useApp } from "../CurrentModule";

const name = __filename.split(/.*\/(.*)\.jsx$/)[1];
console.log(`Reloaded ${name}`);

const Component = () => {
  // console.log(`rendered ${name}`)
  const { state, actions } = useApp();
  return (
    <div className={name}>
      <p> Some text from a {name} </p>
    </div>
  );
};

export default Component;
CurrentModule(Component);
