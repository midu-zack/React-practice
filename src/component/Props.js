import React from 'react'

function Props({value}) {
    console.log(value);
  return (
    <div>
      <p>Value received from State component : {value}</p>
    </div>
  )
}

export default Props;
