import actions from '../actions.js';

const CounterButtons = React.createClass({
  render() {
    return (
      <div>
        <button onClick={ this.increment }>Increase</button>
        <button onClick={ this.decrement }>Decrease</button>
        <button onClick={ this.remove }>Remove</button>
      </div>
    )
  },

  increment() {
    return actions.plusOne(this.props.counterData.get('counter_id'));
  },

  decrement() {
    return actions.minusOne(this.props.counterData.get('counter_id'));
  },

  remove() {
    return actions.deregisterCounter(this.props.counterData.get('counter_id'));
  }
});

export default CounterButtons;
