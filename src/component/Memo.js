 import React from 'react'
 
 function Memo() {
    console.log("USING IN  useMemo")
   return (

     <div>
       This is useMemo
     </div>
   )
 }
 
 export default React.memo(Memo);