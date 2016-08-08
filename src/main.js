import ReactDOM from 'react-dom';

import Counter from 'components/Counter.js';

let counters = (
  <div>
    <Counter />
    <Counter />
    <Counter />
  </div>
);

ReactDOM.render(
  counters,
  document.getElementById('flux-app')
);
