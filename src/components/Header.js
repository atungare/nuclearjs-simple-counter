import actions from '../actions.js';

const Header = React.createClass({
  render() {
    return (
      <div>
        <button onClick={ this.addCounter }>Add Counter</button>
      </div>
    )
  },

  addCounter: actions.addCounter

});

export default Header;
