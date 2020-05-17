import React from 'react';
import '../css/sorting.css';

export class BinarySort extends React.Component {
    
  constructor(props) {
    super(props);
    this.testVarible= this.props.message;

    this.state = {
      array: [],
  };
  }

  componentDidMount() {
    this.haha(this.testVarible);
  }

  haha(parameter) {
    this.setState({ array: parameter.sort() });
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
      </div>
       );
    }
}

export default BinarySort;