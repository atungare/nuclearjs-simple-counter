import ReactDOM from 'react-dom';

import reactor from './reactor.js';
import CounterStore from 'stores/CounterStore.js';

import App from './components/App.js'

reactor.registerStores({
  'counters': CounterStore
});

ReactDOM.render(
  React.createElement(App),
  document.getElementById('flux-app')
);
