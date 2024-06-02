// import React from 'react'

// function Testing() {
//   const [value, setValue] = useState("Midlaj");

//    const handle = (e) => {
//     const value = e.target.value;
//   };

//   const Data = () => {
//     setValue(handle());
//   };

//   return (
//     <div>
//       <label htmlFor="">{Data()}</label>

//       <input type="text" onClick={value} />
//     </div>
//   );
// }
 

// export default Testing


import React, { useState } from 'react';

function Testing() {
  const [value, setValue] = useState('Emty ');

  const handle = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <span>{value}</span>
      
      <input type="text" value={value} onChange={handle} />
    </div>
  );
}

export default Testing;
