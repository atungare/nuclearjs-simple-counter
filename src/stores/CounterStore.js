import { Store, toImmutable } from 'nuclear-js';

import action_types from '../action_types.js';

const CounterStore = Store({
  getInitialState() {
    return toImmutable({ number: 0 });
  },

  initialize() {
    this.on(action_types.PLUS, addToNumber);
    this.on(action_types.MINUS, subtractFromNumber);
  }
});

function addToNumber (state, payload) {
  let new_val = state.get('number') + payload;
  return state.set('number', new_val)
}

function subtractFromNumber (state, payload) {
  let new_val = state.get('number') - payload;
  return state.set('number', new_val)
}

export default CounterStore;
