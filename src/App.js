// import logo from './logo.svg';
import React, { Component } from "react";
import "./App.css";
import Greet from "./component/FunctionComponent";
import Message from "./component/Message";
 
// import Zack from "./component/ClassComponent";
// import Counter from "./componant/Counter";
// import Forms from "./componant/Forms";
// import List from "./componant/List";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome To React-Learning Plat Form</h1>
        {/* <Counter /> */}
        {/* <Forms /> */}
        {/* <List/> */}
        {/* <Zack name="midlaj" /> */}
        
         <Greet name="Malappuram"/>

         <Message />


      </div>
    );
  }
}

export default App;
