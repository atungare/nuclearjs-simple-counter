
const CounterDisplay = React.createClass({
  render() {
    return (
      <div>
        <h3>{ this.props.counterData }</h3>
      </div>
    )
  }
});

export default CounterDisplay;
