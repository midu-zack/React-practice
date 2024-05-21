/* eslint-disable no-unused-vars */
import { useState } from "react";
import Props from "./Props";

function State() {
  const [stateValue ,setStateValue] = useState({ value: 23 });

  console.log(stateValue)
  return (
    <div>
      <p>Value : {stateValue.value} </p>
      <Props value={stateValue.value}/>
    </div>
  );
}

export default State ;
