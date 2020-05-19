import React from 'react';
import '../css/sorting.css';

/*this delay in state using promise idea is a huge thanks to https://ianmackay.io/ */
const call = async (fn) => {
  await new Promise(r => setTimeout(r));
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

  swap = (array, count) => {
    this.setState({array: array})
    this.setState({countSwaps: 'Number of Swaps: ' + count});
    return array;
  }

  async sortFunction(array) {
    let count = 0;
    let n = array.length;
    for (let j = 1; j < n; j++) {
        let key = array[j];
        let i = j-1;
        while ( (i > -1) && ( array[i] > key ) ) {
            array[i+1] = array[i];
            i--;
            count++;
            await call(() => this.swap(array, count));
        }
        array[i+1] = key;
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