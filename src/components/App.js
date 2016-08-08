import Counter from 'components/Counter.js';
import actions from '../actions.js';

const App = React.createClass({
  render() {
    actions.registerCounter('one');
    actions.registerCounter('two');
    return (
      <div>
        <Counter identifier="one"/>
        <Counter identifier="two"/>
      </div>
    )
  }
});

export default App;
