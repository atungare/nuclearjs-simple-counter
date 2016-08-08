import CounterDisplay from './CounterDisplay.js';
import CounterButtons from './CounterButtons.js';

const Counter = React.createClass({
  render() {
    return (
      <div>
        <CounterDisplay counterData={ this.props.counterData }/>
        <CounterButtons counterId={ this.props.counterId }/>
      </div>
    )
  }
});

export default Counter;
