import reactor from './reactor.js';
import action_types from './action_types.js';

const actions = {
  registerCounter(counter_id) {
    reactor.dispatch(action_types.REGISTER_COUNTER, counter_id)
  },

  plusOne(counter_id) {
    reactor.dispatch(action_types.PLUS, { counter_id, value: 1 });
  },

  minusOne(counter_id) {
    reactor.dispatch(action_types.MINUS, { counter_id, value: 1 });
  }
}

export default actions;
