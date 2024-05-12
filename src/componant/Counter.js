import React,{Component} from 'react';

class Counter extends Component{
  state = {
    myString:'Checking Todo App',
    heading : "Count Component",
    counter : 0 
  
   }

  oneIncrement = ()=>{
    this.setState({
      counter: this.state.counter+1
    })
  }

  onDecrement = ()=>{
    this.setState({
      counter:this.state.counter-1
    })
  }
  render (){
    return(
      <div className="App">
      <h1>Counter Component</h1>
      <h3>Welcome</h3>
        <h1>{this.state.counter}</h1>
      <button onClick={this.onDecrement}>-</button>
      <button onClick={this.oneIncrement}>+</button>
     </div>
    
    )
  }}
 

  export default Counter