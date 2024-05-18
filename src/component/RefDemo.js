 import React, { Component } from 'react'
 
 class RefDemo extends Component {

    constructor (props){
        super(props)
            this.input =React.createRef()
        
    }

    componentDidMount(){
        console.log(this.inputRef);
    }
   render() {
     return (
       <div>
         <input type="text" ref={this.inputRef} />
       </div>
     )
   }
 }
 
 export default RefDemo