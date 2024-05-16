// import { render } from "@testing-library/react";
import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "Every Perfect ",
    };
  }

  changeText (){
    this.setState({
        message:'So join you'
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={()=> this.changeText()}> Click</button>
      </div>
    );
  }
}

export default Message