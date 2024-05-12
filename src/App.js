// import logo from './logo.svg';
import React, { Component } from "react";
import "./App.css";
// import Counter from "./componant/Counter";
 
// import Forms from "./componant/Forms";
import List from "./componant/List";
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome</h1>
        {/* <Counter /> */}
        
        {/* <Forms /> */}
        <List/>
      </div>
    );
  }
}

export default App;
