import React from "react";

//  function component
//  function Greet(){
//     return <h1>Hello Zack</h1>
//  }

const Greet = ({ name, hereName }) => {
  return (
    <div>
      <h1>Where are You From {name} </h1>;
    </div>
  );
};

export default Greet;
