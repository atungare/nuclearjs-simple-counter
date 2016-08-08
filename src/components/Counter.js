import CounterDisplay from './CounterDisplay.js';
import CounterButtons from './CounterButtons.js';

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
