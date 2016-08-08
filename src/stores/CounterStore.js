import { Store, toImmutable } from 'nuclear-js';

import action_types from '../action_types.js';

const CounterStore = Store({
  getInitialState() {
    return toImmutable({});
  },

  initialize() {
    this.on(action_types.REGISTER_COUNTER, registerCounter);
    this.on(action_types.DEREGISTER_COUNTER, deregisterCounter);
    this.on(action_types.PLUS, addToNumber);
    this.on(action_types.MINUS, subtractFromNumber);
  }
});

function registerCounter (state, counter_id) {
  return state.set(counter_id, 0);
}

function deregisterCounter (state, counter_id) {
  return state.delete(counter_id);
}

function addToNumber (state, { counter_id, value }) {
  return state.updateIn([counter_id], old_val => old_val + value);
}

function subtractFromNumber (state, { counter_id, value }) {
  return state.updateIn([counter_id], old_val => old_val - value);
}

export default CounterStore;
