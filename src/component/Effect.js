 import React, { useEffect, useState } from 'react'
 
 function Effect() {
    const [value,setValue]= useState(0);

    useEffect(()=>{
      console.log(`your click ${value} times`)
    })

   return (
     <div>
 
       <label>{value}</label>
       <button onClick={()=>{setValue(value+1)}}>Click</button>
     </div>
   )
 }
 

 export default Effect;