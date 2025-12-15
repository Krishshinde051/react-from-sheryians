import React, { useState } from 'react'

const App = () => {

  const [num, setnum] = useState(['krish','sarthak','Ayush',10,15])
  
  function btnclicked () {
    const newNum = [...num]
    
    newNum.pop()
    
    
    console.log(newNum)

    setnum(newNum)
  }

  return (
    <div>
      <h1>{num} </h1>
      <button onClick={btnclicked} >Click me </button>
    </div>
  )
}

export default App