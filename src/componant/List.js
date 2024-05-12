import React, { Component } from "react";

class List extends Component {
  state = {
    data: [
      {
        id: 1,
        name: "john",
        age: 45,
      },
      {
        id: 2,
        name: "zai",
        age: 25,
      },
    ],
  };

  componentDidMount(){
    alert()
    // console.log('running');
  }
  render() {
    return (
      <div>
        <ul>{this.state.data.map((value,index)=>{
          return <li key={value.id}>{value.name}</li>

        })}</ul>
      </div>
    );
  }
}

export default List;
