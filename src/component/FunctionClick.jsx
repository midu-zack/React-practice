import React, { Component } from 'react';

class FunctionClick extends Component {
  
  clickHandler = () => {
    console.log("Button Clicked");
  }

  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default FunctionClick;
