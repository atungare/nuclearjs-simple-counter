import CounterDisplay from './CounterDisplay.js';
import CounterButtons from './CounterButtons.js';

const Counter = React.createClass({
  render() {
    return (
      <div>
        <CounterDisplay identifier={ this.props.identifier }/>
        <CounterButtons identifier={ this.props.identifier }/>
      </div>
    )
  }
});

export default Counter;
