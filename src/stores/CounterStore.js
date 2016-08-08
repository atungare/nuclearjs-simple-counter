import { Store, toImmutable } from 'nuclear-js';

import action_types from '../action_types.js';

const CounterStore = Store({
  getInitialState() {
    return toImmutable([]);
  },

  initialize() {
    this.on(action_types.REGISTER_COUNTER, registerCounter);
    this.on(action_types.DEREGISTER_COUNTER, deregisterCounter);
    this.on(action_types.PLUS, addToCounter);
    this.on(action_types.MINUS, subtractFromCounter);
  }
});

function findByCounterId (state, counter_id) {
  return state.findIndex((counter) => counter.get('counter_id') === counter_id);
}

function registerCounter (state, counter_id) {
  return state.push(toImmutable({counter_id, value: 0}));
}

function deregisterCounter (state, counter_id) {
  let index = findByCounterId(state, counter_id);
  return state.delete(index);
}

function addToCounter (state, { counter_id, update }) {
  let index = findByCounterId(state, counter_id);
  return state.updateIn([index, 'value'], old_val => old_val + update);
}

function subtractFromCounter (state, { counter_id, update }) {
  let index = findByCounterId(state, counter_id);
  return state.updateIn([index, 'value'], old_val => old_val - update);
}

export default CounterStore;
