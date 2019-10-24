import { CurrentModule, React, useApp } from "../CurrentModule";

const name = __filename.split(/.*\/(.*)\.jsx$/)[1];
console.log(`Reloaded ${name}`);

const Component = () => {
  // console.log(`rendered ${name}`)
  const { state, actions } = useApp();
  return (
    <div className={name}>
      <p>
        {name} {state.count}
      </p>
      {/* <button onClick={actions.increaseCount}>Increase</button> */}
    </div>
  );
};

export default Component;
CurrentModule(Component);
