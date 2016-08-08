import reactor from './reactor.js';
import action_types from './action_types.js';

const actions = {
  plusOne() {
    reactor.dispatch(action_types.PLUS, 1);
  },

  minusOne() {
    reactor.dispatch(action_types.MINUS, 1);
  }
}

export default actions;
