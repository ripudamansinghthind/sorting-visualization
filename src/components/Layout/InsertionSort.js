import React from 'react';
import '../css/sorting.css';

/*this delay in state using promise idea is a huge thanks to https://ianmackay.io/ */
const call = async (fn) => {
  await new Promise(r => setTimeout(r, 1));
  return fn();
}

export default class InsertionSort extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      array: this.props.message,
      countSwaps: 'Please Make a random array before trying to sort it :)'
    };
  }

  componentDidMount() {
    this.sortFunction(this.props.message)
  }

  swap = (array, x, y, count) => {
    [array[x], array[y]] = [array[y], array[x]]
    this.setState({array: array})
    this.setState({countSwaps: 'Number of Swaps: ' + count});
    return array;
  }

  async sortFunction(parameter) {
    let count = 0;
    console.log(parameter);
    const n = parameter.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (parameter[j] > parameter[j + 1]) {
          count++;
          parameter = await call(() => this.swap(parameter, j, j + 1, count));
        }
      }
  }
  }

  render() {
    const {array} = this.state;
    return (
      <div className="array-container">
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{height: `${value}px`}}></div>
        ))}
        <p>{this.state.countSwaps}</p>
      </div>
    );
  }
}