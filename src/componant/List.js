import React, {PureComponent } from "react";

class List extends PureComponent {
  state = {
    score : 10 ,
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

  // componentDidMount(){
  //   alert()
  //   // console.log('running');
  // }

  increment=()=>{

    this.setState({
      score : 23
    })
   
  }

  render() {
    console.log(this.state.score);
    return (
      <div>
        <ul>{this.state.data.map((value,index)=>{
          return <li key={value.id}>{value.name}</li>

        })}</ul>

        <button onClick={this.increment}>Score</button>
      </div>
    );
  }
}

export default List;
