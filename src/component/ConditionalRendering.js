import React from "react"
function Greeting (props){

    const isLoggedIn = props.loggedout

    if(isLoggedIn){
        return <h1>Welcome to Conditional Rendring</h1>
    
    }    else{
     
        return <h1>Please sign in!</h1>
    }
}

export default Greeting