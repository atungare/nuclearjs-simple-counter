import actions from '../actions.js';

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

export default CounterButtons;
