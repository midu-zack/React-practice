import React  , { Component } from "react";

class Zack extends Component {
    render (){
        const { name,test } = this.props

        return <h1>SAY TO ME  {name} mid {test} </h1>
    }
}


export default Zack