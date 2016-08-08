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

  increment() {
    return actions.plusOne(this.props.identifier);
  },

  decrement(){
    return actions.minusOne(this.props.identifier);
  }
});

export default CounterButtons;
