 import React, { useReducer } from 'react'
 import usageReducer from '../reducers/usageReducer';


 
 function Reducer() {
    const [value, dispatch] = useReducer(usageReducer,0);
   return (
     <div>

       <button onClick={()=>{
        dispatch(1)
       }}> Increment Button</button>
       <label >{value}</label>

       <button onClick={()=>{
        dispatch(-1)
       }}>Decrement Button</button>
     </div>
   )
 }
 
 export default Reducer
 