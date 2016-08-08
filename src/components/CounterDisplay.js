const CounterDisplay = React.createClass({
  render() {
    let counter_val = this.props.counterData.get('value');

    let stars = counter_val > 0 ?
      Array(counter_val).fill().map((x, i) => {
        return (<span key={i}>{'*'}</span>);
      })
      : [];

    return (
      <div>
        <h3>{ counter_val } { stars }
        </h3>
      </div>
    )
  }
});

export default CounterDisplay;
