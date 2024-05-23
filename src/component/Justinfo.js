import React from 'react'

 function Justinfo() {
    console.log('RENDER FOR JUST INFO');
  return (

    <div>
      <h1>JustInfo</h1>

    </div>
  )
}
 
const NewCom = React.memo(Justinfo)
export default NewCom;