import React from 'react';
import '../css/sorting.css';

export class BubbleSort extends React.Component {
    
  constructor(props) {
    super(props);
    this.testVarible= this.props.message;

    this.state = {
      array: []
  };
  }

  componentDidMount() {
    this.haha(this.testVarible);
  }

  async haha(parameter) {
    var n = parameter.length;
    for(var i=0; i<n-1; i++) {
      for(var j=0; j<n-i-1; j++) {
        if(parameter[j] > parameter[j+1]) {
          var temp = parameter[j];
          parameter[j] = parameter[j+1];
          parameter[j+1] = temp;
        }  
        this.setState({ array: parameter });
      }
    }
}


  render() {
    let {array} = this.state;
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

export default BubbleSort;