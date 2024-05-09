// import logo from './logo.svg';
import React,{Component} from 'react';
import './App.css';
import Todo from './componant/Todo';
import Forms from './componant/Forms';

class App extends Component{
  state= {
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
      <h1>Todo App</h1>
      <h1>{this.state.heading}</h1>
      <h3>Welcome</h3>
        <h1>{this.state.counter}</h1>
      <button onClick={this.onDecrement}>-</button>
      <button onClick={this.oneIncrement}>+</button>

      {/* <button onClick={this.handleChanged} >Click Now</button>  */}
      <Todo myStringTest = {this.state.myString}/>
      <Forms />
    </div>
    
    )
  }}

export default App;
