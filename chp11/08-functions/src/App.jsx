// import React from 'react'

// const App = () => {

//    const btnclick = () => {
//     console.log("button is clicked ");
//   }

//   const mouse = () => {
//     console.log('mouse enter')
//   }

//   return (
//     <div>
//       <h1>Hello ,Krish</h1>

//       <button onMouseEnter={mouse} onClick={() => {
//         console.log('button is clicked')
//       }} >Change User</button>
//       <button onMouseEnter={mouse} onClick={btnclick} >explore this</button>
//     </div>
//   )
// }
// export default App

// import React from "react";

// const App = () => {
//   function inputchanges(val) {
//     console.log(val);
//   }
//   return (
//     <div>
//       <input
//         onChange={function (elem) {
//           inputchanges(elem);
//         }}
//         placeholder="enter your name"
//         type="text"
//       />

//       <div
//         onClick={() => {
//           console.log("div is clikked");
//         }}
//         onMouseEnter={function () {
//           console.log("mouse has enter ");
//         }}
//         className="box" >
//       </div>
//     </div>
//   );
// };

// export default App;


import React from 'react'

const App = () => {
  return (
    <div onWheel ={(elem)=> {
      console.log(elem.deltaY)
    }}>
      <div className="page1">hi</div>
      <div className="page2"></div>
      <div className="page3"></div>
    </div>
  )
}

export default App
