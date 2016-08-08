let CounterDisplay = React.createClass({
  render() {
    return (
      <div>
        <h3>{ 10 }</h3>
      </div>
    )
  }
});

let CounterButtons = React.createClass({
  render() {
    return (
      <div>
        <button onClick={ this.increment }>Increase</button>
        <button onClick={ this.decrement }>Decrease</button>
      </div>
    )
  },

  increment() {

  },

  decrement() {

  }

});

let Counter = React.createClass({
  render() {
    return (
      <div>
        <CounterDisplay />
        <CounterButtons />
      </div>
    )
  }
});

export default Counter;
