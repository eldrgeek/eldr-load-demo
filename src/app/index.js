import { createOvermind } from "overmind";
import { createHook } from "overmind-react";
export let useApp;
export let app;
app = createOvermind({
  state: {
    count: 0,
    logs: []
  },
  actions: {
    increaseCount({ state }, count = 1) {
      state.count += count;
    }
  }
});

useApp = createHook();
