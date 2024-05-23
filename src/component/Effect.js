import React, { useEffect, useState, useContext, useMemo } from "react";

import MyContext from "../Context";

function Effect() {
  let contextValue = useContext(MyContext);
  console.log(contextValue);
  const [value, setValue] = useState(0);

  const onHandle = useMemo(() => {
    return () => {
      setValue(value + 1);
    };
  }, [value]);

  useEffect(
    () => {
      console.log(`your click ${value} times`); //mount
      return console.log("clear this function "); // unmount
    },
    [value] //updating
  );

  return (
    <div>
      <p>Data form Context :{contextValue.someData}</p>
      <label>{value}</label>
      <button onClick={onHandle}>Click</button>
    </div>
  );
}

export default Effect;
