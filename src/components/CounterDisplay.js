import reactor from '../reactor.js';
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
        <h3>{ this.state.count.get(this.props.identifier) }</h3>
      </div>
    )
  }
});

export default CounterDisplay;
