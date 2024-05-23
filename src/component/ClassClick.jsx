 import React from 'react'
 
 function ClassClick() {
    function clickHandlee(){
        console.log("Click The Button")
    }
   return (

     <div>
       
       <button onClick={clickHandlee}>Click me </button>
       
     </div>
   )
 }
 
 export default ClassClick
 