import reactor from '../reactor.js';
import actions from '../actions.js';
import getters from '../getters.js';

const CounterDisplay = React.createClass({

  mixins: [reactor.ReactMixin],

  getDataBindings() {
    return {
      count: getters.count
    }
  },

  render() {
    return (
      <div>
        <h3>{ this.state.count }</h3>
      </div>
    )
  }
});

const CounterButtons = React.createClass({
  render() {
    return (
      <div>
        <button onClick={ this.increment }>Increase</button>
        <button onClick={ this.decrement }>Decrease</button>
      </div>
    )
  },

  increment: actions.plusOne,

  decrement: actions.minusOne

});

const Counter = React.createClass({
  render() {
    return (
      <div>
        <CounterDisplay />
        <CounterButtons />
      </div>
    )
  }
});

export default Counter;
