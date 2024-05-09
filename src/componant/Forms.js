import React, { Component } from 'react'




class Forms extends Component {

        // state ={
        //     inputFeild
        // }

    onHandleChange= event =>{
        console.log(event.target.value)
    }
  render() {
    return (
       <form >
        <h1>Form Component</h1>
        <input type="text" onChange={this.onHandleChange} />

       </form>
    )
  }
}

export default Forms