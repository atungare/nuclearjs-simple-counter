const CounterDisplay = React.createClass({
  render() {
    return (
      <div>
        <h3>{ this.props.counterData.get('value') }</h3>
      </div>
    )
  }
});

export default CounterDisplay;
