// import React, { Component } from "react";
// import "./App.css";
// // import State from "./component/State";
// // import UseState from "./component/UseState";
// // import Greet from "./component/FunctionComponent";
// // import Message from "./component/Message";/
// // import Zack from "./component/ClassComponent";
// // import Counter from "./component/Counter";
// // import Forms from "./component/Forms";
// // import List from "./component/List";
// // import FunctionClick from "./component/FunctionClick"
// // import ClassClick from "./component/ClassClick";
// // import NameList from "./component/NameList"
// // import PureComponent from "./component/PureComponent"
// // import RefDemo from "./component/RefDemo"

// import MyContext from "./Context";

// import Effect from "./component/Effect";
// import Justinfo from "./component/Justinfo";

// class App extends Component {
//   render() {
//     const valueToProvide = { someData: "Hello from Context!" }; // Example value

//     return (
//       <div className="App">
//         <MyContext.Provider value={valueToProvide}>
//           <Justinfo />
//           <Effect />
//         </MyContext.Provider>
//       </div>
//     );
//   }
// }

// export default App;

import MyContext from "./Context";
import React from "react";


import "./App.css";
// import State from "./component/State";
// import UseState from "./component/UseState";
// import Greet from "./component/FunctionComponent";
// import Message from "./component/Message";
// import Zack from "./component/ClassComponent";
// import Counter from "./component/Counter";
// import Forms from "./component/Forms";
// import List from "./component/List";
// import FunctionClick from "./component/FunctionClick"
// import ClassClick from "./component/ClassClick";
// import NameList from "./component/NameList"
// import PureComponent from "./component/PureComponent"
// import RefDemo from "./component/RefDemo"
// import Effect from "./component/Effect";
// import Justinfo from "./component/Justinfo";
// import Memo from "./component/Memo";
// import Ref from "./component/Ref";
// import Reducer from "./component/Reducer";
 
// import Daytask from "./component/Daytask";
// import Testing from "./component/Testing";
// import Card from "./component/Card";
import Instagram from "./component/Instagram"
function App() {
  const valueToProvide = { someData: "Hello from Context!" }; // Example value

  return (
    <div>


    

      <MyContext.Provider value={valueToProvide.someData}>

        {/* <h1>Welcome To React-Learning Plat Form</h1> */}
        {/* <Counter /> */}
        {/* <Forms /> */}
        {/* <List/> */}
        {/* <Zack name="midlaj" test ="maths" /> */}
        {/* <Greet name="Malappuram" heroName = 'saved' /> */}
        {/* <Message /> */}
        {/* <FunctionClick/> */}
        {/* <ClassClick/> */}
        {/* <NameList/> */}
        {/* <PureComponent/> */}
        {/* <RefDemo/> */}
        {/* <State />  */}
        {/* <UseState/> */}

        {/* <Memo/> */}

        {/* <Effect /> */}
        {/* <Justinfo/> */}
        {/* <Ref/> */}

      {/* <Daytask/> */}
      
      {/* <Card/> */}
      <Instagram/>
      </MyContext.Provider>
      {/* <Reducer/> */}
      {/* <Testing/> */}



    </div>
  );
}

export default App;
