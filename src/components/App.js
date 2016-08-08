import reactor from '../reactor.js';
import getters from '../getters.js';

import Header from 'components/Header.js';
import Counter from 'components/Counter.js';

const App = React.createClass({
  mixins: [reactor.ReactMixin],

  getDataBindings() {
    return {
      counters: getters.counters
    }
  },

  render() {
    let counters = this.state.counters.map((counter_data, counter_id) => {
      return (
        <Counter counterId={counter_id} counterData={counter_data} />
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
