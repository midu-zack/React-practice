 import React, { useEffect, useState } from 'react'
 
 function Effect() {
    const [value,setValue]= useState(0);

    useEffect(()=>{
      console.log(`your click ${value} times`)  //mount
      return  console.log('clear this function ') // unmount
     
    },[value] //updating
  )

   return (
     <div>
 
       <label>{value}</label>
       <button onClick={()=>{setValue(value+1)}}>Click</button>
     </div>
   )
 }
 

 export default Effect;