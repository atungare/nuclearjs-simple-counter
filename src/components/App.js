import reactor from '../reactor.js';
import getters from '../getters.js';

import Header from 'components/Header.js';
import Counter from 'components/Counter.js';

const App = React.createClass({
  mixins: [reactor.ReactMixin],

  getDataBindings() {
    return {
      count: getters.count
    }
  },

  render() {
    let counters = this.state.count.map((count, counter_id) => {
      return (
        <Counter identifier={counter_id} />
      )
    });

    return (
      <div>
        <Header />
        {counters}
      </div>
    )
  }
});

export default App;
