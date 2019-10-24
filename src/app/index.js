import { createOvermind } from "overmind";
import { createHook } from "overmind-react";
export let useApp;
export let app;
app = createOvermind({
  state: {
    count: 3,
    logs: [],
    something: 12
  },
  actions: {
    increaseCount({ state }) {
      state.count += 1;
    }
  }
});

useApp = createHook();
