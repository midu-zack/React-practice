import React, { Component } from 'react'

export default class Todo extends Component {
  render() {
    return (
      <div>
            <h1>Todo Component </h1>
            <h2>{this.props.myStringTest}</h2>
      </div>
    )
  }
}
