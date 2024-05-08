// import logo from './logo.svg';
import React,{Component} from 'react';
import './App.css';
import Todo from './componant/Todo';

class App extends Component{
  state= {
    myString:'I miss you',
    myStringTwo : "i have don't problem"
  
   }
  render (){
    return(
      <div className="App">
      <h1>Todo App</h1>
      <h2>{this.state.myString}</h2>
      
      <h3>Welcome</h3>
      <button>Click Now</button> 
      <Todo/>
    </div>
    
    )
  }}

export default App;
