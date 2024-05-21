import React, {useState} from "react";

function UseState() {

  const [value,setValue] = useState(0)

  // two argument for The useState hook
  //value one most value in state 
  // setValue is the function 
  

  return (
    <div>
      <button onClick={()=>setValue(value+1)}>Increment</button>
      <label >{value}</label>
      <button onClick={()=>setValue(value-1)} >Decrement</button>
    </div>
  );
}

export default UseState;
