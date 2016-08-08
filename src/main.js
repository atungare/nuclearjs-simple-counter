import ReactDOM from 'react-dom';

import reactor from './reactor';
import CounterStore from 'stores/CounterStore.js';

import Counter from 'components/Counter.js';

reactor.registerStores({
  'count': CounterStore
});

const counters = (
  <div>
    <Counter />
  </div>
);

ReactDOM.render(
  counters,
  document.getElementById('flux-app')
);
