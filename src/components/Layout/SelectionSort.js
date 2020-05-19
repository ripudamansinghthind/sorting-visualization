import React from 'react';
import '../css/sorting.css';

/*this delay in state using promise idea is a huge thanks to https://ianmackay.io/ */
const call = async (fn) => {
  await new Promise(r => setTimeout(r, 3));
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
    // One by one move boundary of unsorted subarray
    for (let i = 0; i < n-1; i++)
    {
        // Find the minimum element in unsorted array
        let min_idx = i;
        for (let j = i+1; j < n; j++)
            if (array[j] < array[min_idx])
                min_idx = j;
        // Swap the found minimum element with the first
        // element
        let temp = array[min_idx];
        count++;
        await call(() => this.swap(array, count));
        array[min_idx] = array[i];
        await call(() => this.swap(array, count));
        array[i] = temp;
        await call(() => this.swap(array, count));
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