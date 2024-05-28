import React, { useState } from 'react';
import './Day.css';

function Daytask() {
  const [value, setValue] = useState(0);

  const handleIncrement = () => {
    setValue(value + 1);
  };

  const handleDecrement = () => {
    setValue(value - 1);
  };

  const isEven = value % 2 === 0;
  const backgroundColorClass = isEven ? 'even' : 'odd';

  return (
    <div className={`color ${backgroundColorClass}`}>
      <button onClick={handleIncrement}>Increment</button>
      <label>{value}</label>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default Daytask;
