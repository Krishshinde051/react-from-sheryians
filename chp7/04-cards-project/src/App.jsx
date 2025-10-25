import React from 'react'

import Card from './components/Card.jsx'
import User from './components/User.jsx'

const App = () => {

  const arr = [ {
    user : 'krish',
    age :20
  },

  {
    user:'Khemu',
    age :20

  },

  {
    user:'yash',
    age:23

  },
]

arr.map(function (json) {
  console.log(json.user,json.age)
})
  return (
    <div>
      
  

    </div>
  )
}

export default App
